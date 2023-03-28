import { Avatar } from '@mui/material';
import  PublishIcon  from '@mui/icons-material/Publish';
import  ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import  VerifiedUserIcon  from '@mui/icons-material/VerifiedUser';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, {forwardRef} from 'react';
import './Post.css';

const  Post = forwardRef(
    ({
        displayName,
        username,
        verified, 
        text, 
        image, 
        avatar
}, ref) => {
    return (
        <div className = "post" ref={ref}>
            <div className = "post__avatar">
                <Avatar 
                    src = "https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="/>
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                    <h3>
                        Subhash singh{" "}
                            <span className = "post__headerSpecial">
                                 <VerifiedUserIcon className = "post__badge" />
                                @Subhash singh
                            </span>
                    </h3>
                    </div>
                    <div className = "post__headerDescription">
                        <p>I chellange  you to buil aTwitter clone </p>
                    </div>
                </div>
                <img 
                    src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZ26zENcF3e-6vIZwXjWlQWezPS7BJNE9Ck5a_lE1KQ&s"
                    alt = ""
                />
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize = "small" /> 
                    <RepeatIcon fontSize = "small" />
                    <FavoriteBorderIcon fontSize = "small" />
                    <PublishIcon  fontSize = "small" /> 
                </div>
            </div>    
        </div>
    );
})

export default Post;