import React, { useEffect, useId, useState } from 'react';
import "./Home.css";
import Nav from './Nav';
import CreatePost from './CreatePost';
import { database } from '../database/database';
import { accounts } from '../database/accounts';
import pin from "../images/pin.webp";
import bamboo from "../images/bamboo.webp";
import plum from "../images/plum.webp";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const [postAccounts, setPostAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");

  const getColor = (account) => {
    switch (account) {
      case "matsu":
        return "#2F6915";
      case "take":
        return "#91B700";
      case "ume":
        return "#FC5453";
      default:
        return "";
    }
  };

  const getImage = (account) => {
    switch (account) {
      case "matsu":
        return `url(${pin})`;
      case "take":
        return `url(${bamboo})`;
      case "ume":
        return `url(${plum})`;
      default:
        return "";
    }
  };


  useEffect(() => {
    setPostList(database);
  }, []);

  useEffect(() => {
    setPostAccounts(accounts);
  }, []);

  const handleChange = (e) => {
    setCurrentAccount(e.target.value);
  }

  const handleAccountChange = (newAccount) => {
    setCurrentAccount(newAccount);
  }

  const handleDelete = (post) => {
    const updatePostList = postList.filter((item) => item !== post);
    setPostList(updatePostList);
  }

  const backgroundImage = getImage(currentAccount);
  return (
    <div className='bodyInner' style={{ backgroundImage }}>
      <Nav />
      <div className='homePage'>
        <div className="inputArea">
          <div className="accounts">
            <p>アカウントを選択してください。</p>
            <form className='accountsForm'>
              {postAccounts.map((shochikubai, index) => {
                const { accountName, accountValue, accountImg } = shochikubai
                return (
                  <div key={index}>
                    <label for={accountName}>
                      <img src={accountImg} alt='' className={accountName} />
                      <div className="radioWrapper">
                        <input type="radio" id={accountName} name="accountSelect" value={accountName} onChange={handleChange} handleAccountChange={handleAccountChange} />
                        <span>{accountValue}</span>
                      </div>
                    </label>
                  </div>
                )
              })}
            </form>
          </div>
          {currentAccount && (
            <CreatePost currentAccount={currentAccount} postList={postList} setPostList={setPostList} getColor={getColor} />
          )}
        </div>
        <div className="outputArea">
          {postList.slice().reverse().map((post, index) => {
            const { account, title, postText } = post;
            const borderColor = getColor(account);
            return (
              <div className={`postContents`} key={index} style={{ borderColor }}>
                <div className="postHeader">
                  <h2>{title}</h2>
                </div>
                <div className="postTextContainer">
                  <p>{postText}</p>
                </div>
                <div className="deleteButton">
                  {currentAccount === account && (
                    <button onClick={() => handleDelete(post)}>消去</button>
                  )}
                </div>
                <div>
                  {postAccounts.map((shochikubai, index) => {
                    const { accountName, accountImg } = shochikubai
                    return (
                      <div key={index}>
                        {accountName === account && (
                          <div className='postAccount'><img src={accountImg} alt='' className={account} /></div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;