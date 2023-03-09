import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";

const Login = () => {
  const logInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={logInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
