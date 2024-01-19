"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegistUser } from "@/app/services/userService";


export interface Error {
    name: string;
    email: string;
    password: string;
}

function RegistPage() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState<Error>({name:"",email:"",password:""});

    const router = useRouter();
    const regist = async () => {
        var result = await RegistUser({name,email,password});
        if(result.error){
            setError(result.error);
        } else {
            localStorage.setItem("access_token", result.access_token);
            router.push("/");
        }
    }

    // const regist = async () =>{
    //      const url = "http://localhost:8000/api/regist/store"
    //      const response = await fetch(url, {
    //          method: "POST",
    //          headers: {"Content-Type": "application/json"},
    //          body: JSON.stringify(name,email,password)
    //      });
    //      if(response.ok){
    //          const result = await response.json();
    //          console.log(result);
    //          if(response.access_token) {
    //              router.push("/"); 
    //          }
    //          return result;
    //      }
    //　}


    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex p-3 me-3 text-2xl justify-center">
                <span className="mt-1 me-3">
                    <FaUser/>
                </span>
                Register
            </h1>

            <div>
                <Input type="text" value={name} placeholder="Your Name" onChange={setName}/>
                <div className="mb-3 text-red-600">{error.name}</div>
                <Input type="email" value={email} placeholder="Email" onChange={setEmail}/>
                <div className="mb-3 text-red-600">{error.email}</div>
                <Input type="password" value={password} placeholder="Password" onChange={setPassword}/>
                <div className="mb-3 text-red-600">{error.password}</div>
            </div>

            <div>
                <button className="w-full bg-black hover:bg-gray-800 
                focus:shadow-outline focus:outline-none text-white 
                py-2 px-4 my-3 rounded-lg" onClick={() => {regist();}}>Sign up</button>

                <Link href="/auth/login" 
                className="flex justify-center p-2 my-1 
                text-gray-600 bg-gray-200 hover:bg-gray-300 
                rounded-lg">Sign in</Link>
            </div>
        </div>
    );
}

export default RegistPage;