"use client"

import { FaUser } from "react-icons/fa";
import Input from "@/app/components/input";
import Link from "next/link";

function RegistPage() {
    return (
        <div className="mx-auto w-1/3">
            <h1 className="flex p-3 me-3 text-2xl justify-center">
                <span className="mt-1 me-3">
                    <FaUser/>
                </span>
                Register
            </h1>

            <div>
                <Input type="text" value="" placeholder="Your Name"/>
                <Input type="email" value="" placeholder="Email"/>
                <Input type="password" value="" placeholder="Password"/>
            </div>

            <div>
                <button className="w-full bg-black hover:bg-gray-800 
                focus:shadow-outline focus:outline-none text-white 
                py-2 px-4 my-3 rounded-lg">Sign up</button>

                <Link href="/auth/login" 
                className="flex justify-center p-2 my-1 
                text-gray-600 bg-gray-200 hover:bg-gray-300 
                rounded-lg">Sign in</Link>
            </div>
        </div>
    );
}

export default RegistPage;