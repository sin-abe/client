"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { AuthUser } from "@/app/services/userService";


export interface Error {
    auth: string;
}

function LoginPage() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState<Error>({auth:""});

    const router = useRouter();
    const auth = async () => {
        var result = await AuthUser({name,email,password});
        if(result.error){
            setError(result.error);
        } else {
            localStorage.setItem("access_token", result.access_token);
            router.push("/");
        }
    }

    // const auth = async () =>{
    //      const url = "http://localhost:8000/api/auth"
    //      const response = await fetch(url, {
    //          method: "POST",
    //          headers: {"Content-Type": "application/json"},
    //          body: JSON.stringify(email,password)
    //      });
    //      if(response.ok){
    //          const result = await response.json();
    //          console.log(result);
    //          return result;
    //      }
    //　}

    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex p-3 me-3 text-2xl justify-center">
                <span className="mt-1 me-3">
                    <FaUser/>
                </span>
                Sign in
            </h1>

            <div>
            <div className="mb-3 text-red-600">{error.auth}</div>
                <Input type="email" value={email} placeholder="Email" onChange={setEmail}/>
                <Input type="password" value={password} placeholder="Password" onChange={setPassword}/>
            </div>

            <div>
                <button className="w-full bg-black hover:bg-gray-800 
                focus:shadow-outline focus:outline-none text-white 
                py-2 px-4 my-3 rounded-lg" onClick={() => {auth();}}>Sign in</button>

                <Link href="/auth/regist" 
                className="flex justify-center p-2 my-1 
                text-gray-600 bg-gray-200 hover:bg-gray-300 
                rounded-lg">Register</Link>
            </div>
        </div>
    );
}

export default LoginPage;