"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegistUser } from "@/app/services/userService";
import ClickButton from "@/app/components/clickButton";


export interface Error {
    name: string;
    email: string;
    password: string;
}

function RegistPage() {

    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
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
            <ClickButton label="Sign Up" onClick={regist} disabled={!name || !email || !password}/>
                <Link href="/auth/login" 
                className="flex justify-center py-2 px-4 my-3 
                text-gray-600 bg-gray-200 hover:bg-gray-300 
                w-full rounded-lg">Sign in</Link>
            </div>
        </div>
    );
}

export default RegistPage;