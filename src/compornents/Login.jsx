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
      <p>Login to start</p>
      <button onClick={loginInWithGoogle}>Login in with Google</button>
    </div>
  );
};

export default Login
