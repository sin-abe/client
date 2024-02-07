"use client"

import Image from "next/image";
import { Tweet } from "@/app/models/tweet";
import Link from "next/link";
import imageMe from "@/public/images/me.png";

interface TweetDetailProps {
    tweet: Tweet;
}

const TweetDetail = ({tweet}: TweetDetailProps) => {

    const dateFormat = (datestring: string) => {
        return new Date(datestring).toLocaleString("ja-jp");
    }

    return (
        <div className="mt-3 flex border-b">
          <div>
                <Image className="inline-block rounded-full h-[40px] w-[40px] me-3" src={imageMe} alt="" />
            </div>
            <div className="tweet-body">
                <div className="tweet-user">
                    <Link href="#">
                        <span className="font-bold">{tweet.user.name}</span>
                    </Link>
                    <span className="ps-3 text-gray-500">{dateFormat(tweet.created_at)}</span>
                </div>
                <div className="whitespace-pre-wrap mt-2 mb-2">
                    {tweet.message}
                </div>
            </div>
        </div>
    );
};

export default TweetDetail;

