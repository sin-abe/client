"use client"

import { Tweet } from "@/app/models/tweet"
import TweetDetail from "./tweetDetail";

interface TweetLIstProps {
    tweets: Tweet[];
}

const TweetList = ({tweets}: TweetLIstProps) => {
    
    return (
        <div>
            {
                tweets?.map((tweet) => (
                    <TweetDetail key={tweet.id} tweet={tweet}/>
                ))
            }
        </div>
    );
};

export default TweetList;