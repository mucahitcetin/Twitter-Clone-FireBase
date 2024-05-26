import React from "react";
import Form from "../../components/Form";
import Post from "../../components/Post";

const Main = ({ user }) => {
  return (
    <main className="border border-zinc-600 overflow-y-auto">
      <header className="border-b border-zinc-600 p-4 font-bold">
        Anasayfa
      </header>

      <Form user={user} />

      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default Main;
