"use client"

import Link from "next/link";
import { SiLoopback } from "react-icons/si";
import NavbarLink from "./navbarLink";

const Navbar = () => {
    console.log("Server Component \"navbar\"");
    return (
        <nav>
            <div className='flex py-3 px-5 border-b'>
                <div className="flex items-center mr-6">
                    <span className="me-3">
                        <SiLoopback size="2em"/>
                    </span>
                    <Link href="/" className="ms-3 me-3">
                        <span className='self-center text-2xl font-semibold text-black'>Next Tweet</span>
                    </Link>
                </div>

                <div>
                    <NavbarLink href="/user/profile" label="Profile" />
                    <NavbarLink href="/auth/regist" label="Register" />
                    <NavbarLink href="/auth/login" label="Sign in" />
                    <NavbarLink href="#" label="Sign out" onClick={() => alert("Logged out successfully.") }/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;