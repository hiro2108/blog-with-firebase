import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "./Logout.css";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div className='logout'>
      <p>ログアウトすると、ブログの投稿が不可状態になります。</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout
