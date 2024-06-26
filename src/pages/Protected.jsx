import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../firebase/config";

const Protected = () => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    // onAuthStateChanged > kullanıcı oturumundaki değişimi izler
    const unsub = onAuthStateChanged(auth, (user) => {
      // eğerki kullanıcı varsa yetkisini true'ya çek
      // oturumu kapalıysa yetkisiyi false'a çek
      setIsAuth(user ? true : false);
    });

    return () => unsub();
  }, []);

  const navigate = useNavigate();

  // eğer yetkisi yoksa kullanıcıyı logine yönlendir
  if (isAuth === false) {
    return <Navigate to={"/"} replace />;
  }

  // yetkisi varsa alt route'daki sayfayı göster
  return <Outlet />;
};

export default Protected;
