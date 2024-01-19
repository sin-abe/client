import { PostUser } from "../models/user";

const URL_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
const REGIST_URL = URL_BASE + "regist/store";
const AUTH_URL = URL_BASE + "auth";
const USER_URL = URL_BASE + "user";


export const RegistUser = async (postUser: PostUser) => {
    try{
        const response = await fetch(REGIST_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postUser)
        });

        if(response.ok){
            const result = await response.json();
            console.log(result);
            return result;
        }
    } catch(error) {
        console.error("Failed to send data", error);
    }
}

export const AuthUser = async (postUser: PostUser) => {
    try{
        const response = await fetch(AUTH_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postUser)
        });

        if(response.ok){
            const result = await response.json();
            console.log(result);
            return result;
        }
    } catch(error) {
        console.error("Failed to send data", error);
    }
}