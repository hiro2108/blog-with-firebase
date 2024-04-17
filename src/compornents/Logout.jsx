import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Logout.css";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  return (
    <div className='logout'>
      <p>ログアウトすると、ブログの投稿が不可状態になります。</p>
      <button onClick="">ログアウト</button>
    </div>
  );
};

export default Logout
