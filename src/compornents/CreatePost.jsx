import React, { useState } from 'react';
import './CreatePost.css';
import { accounts } from 'database/accounts';

const CreatePost = ({ currentAccount, postList, setPostList, getColor, handleAccountChange }) => {
  const [newPost, setNewPost] = useState({
    account: currentAccount,
    title: '',
    postText: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
    if(name==='account'){
      handleAccountChange(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPostWithDefaults={
      account: currentAccount,
      title: newPost?.title || '',
      postText:newPost?.postText || '',
    };
    setPostList([...postList, newPostWithDefaults]);
    setNewPost({ account: currentAccount, title: '', postText: '' });
  };

  const borderColor = getColor(currentAccount);
  const backgroundColor = getColor(currentAccount);

  return (
    <div className="postContainer" style={{ borderColor }}>
      <h1>ブログ投稿</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder='タイトルを入力してください。'
            name="title"
            value={newPost.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputPost">
          <div>本文</div>
          <textarea
            placeholder='ブログを入力してください。'
            name="postText"
            value={newPost.postText}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='postButton' type="submit" style={{ backgroundColor }}>投稿</button>
      </form>
    </div>
  );
};

export default CreatePost;
