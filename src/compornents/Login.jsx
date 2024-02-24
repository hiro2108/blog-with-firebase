import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuth}) => {
  const navigate=useNavigate();
  const loginInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    })
  };
  return (
    <div>
      <p>ご自身のGoogleアカウントでログインすることで、当Webアプリにブログを投稿することができます。</p>
      <button onClick={loginInWithGoogle}>Googleアカウントでログイン</button>
    </div>
  );
};

export default Login
