"use client"

import { useState } from "react";
import ClickButton from "../clickButton";

interface TweetFormProps {
    onPostTweet: (message: string) => void;
}

const TweetForm = ({ onPostTweet }: TweetFormProps) => {
    
    const [message, setMessage] = useState("");

    const messageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const onPost = () => {
        onPostTweet(message);
        setMessage("");
    }

    const isDisabled = () => !message;

    return (
        <div>
            <textarea 
                value={message}
                onChange={messageHandler}
                placeholder="今なにしてる？"
                className="resixze-none w-full h-24 border rounded-md p-2"/>
            <div className="p-3">{message.length} characters</div>
            <ClickButton label="Post" onClick={onPost} disabled={isDisabled()}/>
        </div>
    );
};

export default TweetForm;