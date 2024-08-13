/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import loginAction from "@/app/actions/login";
import logo from '@/app/assets/images/logo.png';
import ButtonComponent from "@/app/components/button";
import InputComponent from "@/app/components/input";
import Image from "next/image";
import { useActionState, useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [state, action] = useActionState(loginAction, { message: "" });

    return (
        <div className="h-full bg-slate-200">
            <div className="md:grid md:grid-cols-3">
                <div className="flex flex-col col-start-2 my-20 bg-slate-700 items-center py-20 rounded-3xl shadow-2xl shadow-slate-950">
                    <Image src={logo} alt="logo" className="w-40 h-40 rounded-3xl mb-20" />
                    <InputComponent type="text" onChange={(e: any) => setUsername(e.target.value)} label="Username" placeholder="Username" />
                    <InputComponent type="password" onChange={(e: any) => setPassword(e.target.value)} label="Password" placeholder="Password" />
                    <ButtonComponent onClick={() => action({username, password})} btnText="Login" />
                    <h1 className="text-red-600 font-serif text-md mt-4 font-bold">{state?.message}</h1>
                </div>
            </div>
        </div>
    );
}