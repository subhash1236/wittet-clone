import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import Postt from './Postt';


function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox/>
      <Post />
      <Postt/>
      
    </div>
  )
}

export default Feed;
