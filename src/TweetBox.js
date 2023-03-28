import { Avatar, Button, } from '@mui/material';
import React from 'react';
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <from>
        <div className="tweetBox__input">
            <Avatar
            src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
            />
            <input placeholder="What`s happening"   type="text"/>
        </div>
        <input
        className="tweetBox__imageInput"
        placeholder="Enter image URL"
        type="text"/>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </from>
    </div>
  )
}

export default TweetBox;
