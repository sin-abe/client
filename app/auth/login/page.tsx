"use client"

import ClickButton from "@/app/components/clickButton";
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
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState<Error>({auth:""});

    const router = useRouter();

    const auth = async () => {
        
        const response = await AuthUser({email,password})

        if (response.access_token) {
            router.push('/');
        }
        
    }

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
                <ClickButton label="Sign in" onClick={auth} disabled={!email || !password}/>

                <Link href="/auth/regist" 
                className="flex justify-center p-2 my-1 
                text-gray-600 bg-gray-200 hover:bg-gray-300 
                rounded-lg">Register</Link>
            </div>
        </div>
    );
}

export default LoginPage;