import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import Post from "../../components/Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../../components/Loader";

const Main = ({ user }) => {
  // abone olunacak kolleksiyonun referansını alalım
  const [tweets, setTweets] = useState();

  useEffect(() => {
    const tweetsCol = collection(db, "tweets");

    //sorgu ayarlarını yap
    const q = query(tweetsCol, orderBy("createdAt", "desc"));

    //kolleksiyondaki verilere abone ol
    onSnapshot(q, (snapshot) => {
      const tempTweets = [];

      snapshot.docs.map((doc) =>
        tempTweets.push({ ...doc.data(), id: doc.id })
      );

      setTweets(tempTweets);
    });
  });
  return (
    <div className="border border-zinc-600 overflow-y-auto">
      <header className="border-b border-zinc-600 p-4 font-bold">
        Anasayfa
      </header>

      <Form user={user} />

      {!tweets ? (
        <div className="my-20 flex justify-center scale-[1.4]">
          <Loader />
        </div>
      ) : (
        tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />)
      )}
    </div>
  );
};

export default Main;
