  import React, { useEffect, useState } from 'react';
  import './CreatePost.css';
  import { addDoc, collection } from 'firebase/firestore';
  import { auth, db } from '../firebase';
  import { useNavigate } from 'react-router-dom';

  const CreatePost = ({ isAuth }) => {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();

    const navigate = useNavigate();

    const createPost = async () => {
      await addDoc(collection(db, "posts"), {
        title: title,
        postText: postText,
        author: {
          username: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        }
      });
      navigate("/");
    };

    useEffect(() => {
      if (!isAuth) {
        navigate("/login");
      }
    }, []);

    return (
      <div className='createPostPage'>
        <div className="postContainer">
          <h1>Create post</h1>
          <div className="inputPost">
            <div>Title</div>
            <input type="text" placeholder='input title' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="inputPost">
            <div>Textarea</div>
            <textarea placeholder='input post contents' onChange={(e) => setPostText(e.target.value)}></textarea>
          </div>
          <button className='postButton' onClick={createPost}>Post</button>
        </div>
      </div>
    );
  };

  export default CreatePost;
