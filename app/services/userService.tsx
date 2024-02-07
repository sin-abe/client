import { PostUser } from "../models/user";
import Cookies from "js-cookie";

const LARAVEL_API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;


export const RegistUser = async (postUser: PostUser) => {
    try{
        const url = LARAVEL_API_URL + "regist/store";
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postUser)
        });

        if(response.ok){
            return await response.json();
        }
    } catch(error) {
        console.error("Failed to send data", error);
    }
}

interface AuthUserProps {
    email:string;
    password:string
}

export const AuthUser = async ({email, password}: AuthUserProps) => {
    try{
        const url = LARAVEL_API_URL + "auth";
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email,password})
        });

        if(response.ok){
            const data = await response.json();
            Cookies.set("access_token",data.access_token,
            {expires: 30}
            )
            return data;
        }
    } catch(error) {
        console.error("Failed to send data", error);
    }
}

export const GetUser = async (accessToken: string) => {
    try{

        if(!accessToken) return;

        const url = LARAVEL_API_URL + "user";
        const response = await fetch(url, {
            method: "GET",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`},
        });

        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch(error) {
        console.error("Failed to send data", error);
    }
}