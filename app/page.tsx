"use client"

import { useEffect, useState } from "react"
import { User, initialUser, testUser } from "./models/user"
import { Tweet } from "./models/tweet"
import { getTweets, postTweet } from "./services/tweetService"
import TweetList from "./components/tweet/tweetList"
import TweetForm from "./components/tweet/tweetForm"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { GetUser } from "./services/userService"

export default function Home() {

  const [user,setUser] = useState<User>(initialUser);
  const [tweets,setTweets] = useState<Tweet[]>([]);
  const token = Cookies.get("access_token");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if(user?.accessToken) {
        const data = await getTweets(user.accessToken);
        setTweets(data);
        console.log(data);
      }
    })();
  },[user]);

  useEffect(() => {
    
    (async () => {
      if(token){
      user.accessToken = token;
      const authUser = await GetUser(token);
      authUser.accessToken = token;
      setUser(authUser);
    }
    else{
      router.replace("auth/login");
    }
    })();
  }, [router])
  

  const onPostTweet =async (message:string) => {
    const newTweet = await postTweet(user,message);
    newTweet?.id && setTweets(currentTweets => [newTweet, ...currentTweets]);
  }


  return (
    <div>
      {
        user?.id > 0 && <>
        <TweetForm onPostTweet={onPostTweet}/>
        <TweetList tweets={tweets}/>
        </>
      }
    </div>
  )
}
