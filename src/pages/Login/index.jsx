import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "./../../firebase/config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
toast;
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      //kaydol modundaysa : hesap oluştur
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("Hesabınız oluşturuldu");
          navigate("/home");
        })
        .catch((err) => {
          toast.error("Bir sorun oluştu" + err.code);
        });
    } else {
      //giriş modundaysa : hesaba giriş yap
      signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("Hesaba giriş yapıldı");
          navigate("/home");
        })
        .catch((err) => {
          //eğer giriş bilgileri yanlışsa
          if (err.code === "auth/invalid-credential") {
            //hata state'ini true'ya çek
            setIsError(true);
          }

          toast.error("Bir sorun oluştu" + err.code);
        });
    }
  };

  //şifremi unuttuma basılınca
  const handleReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() =>
        toast.success(
          "Şifreniz mail adresinize gönderildi.Mailinizi kontrol ediniz"
        )
      )
      .catch((err) => toast.error("Bir hata oluştur:" + err.code));
  };

  //google ile giriş yap
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Hesaba giriş yapıldı");
        navigate("/home");
      })
      .catch((err) => {
        toast.error("Bir sorun oluştu" + err.code);
      });
  };
  return (
    <div className="h-screen grid place-items-center">
      <div className="bg-black flex flex-col gap-10 py-16 px-32 rounded-lg">
        <div className="flex justify-center">
          <img className="h-[60px]" src="/x-logo.webp" alt="" />
        </div>

        <h1 className="text-lg font-bold text-center">Twitter'a giriş yap</h1>

        <button
          onClick={handleGoogle}
          className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap"
        >
          <img className="h-[20px]" src="/google-logo.svg" alt="" /> Google ile
          Giriş Yap
        </button>

        <form onSubmit={handlesubmit} className="flex flex-col">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
            required
          />

          <label className="mt-5">Şifre</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
            required
          />

          <button className="text-black bg-white mt-10 rounded-full p-1 font-bold transition hover:bg-gray-300">
            {isSignUp ? "Kaydolun" : "Giriş Yapın"}
          </button>
        </form>
        <p className="mt-5">
          <span className="text-gray-500">
            {isSignUp ? "Hesabınız varsa" : "Hesabınız yoksa?"}
          </span>

          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="ms-2 text-blue-500 cursor-pointer"
          >
            {isSignUp ? "Giriş Yapın" : "Kaydolun"}
          </span>
        </p>

        {isError && (
          <button onClick={handleReset} className="text-red-500">
            Şifrenizi mi unuttunuz?
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
