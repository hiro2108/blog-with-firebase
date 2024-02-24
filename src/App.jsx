import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './compornents/Home';
import CreatePost from './compornents/CreatePost';
import Login from './compornents/Login';
import Logout from './compornents/Logout';
import Nav from './compornents/Nav';
import { useState } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <Router>
      <Nav isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} isAuth={isAuth}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} ></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
