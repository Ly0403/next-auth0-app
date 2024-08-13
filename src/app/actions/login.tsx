
"use server";


import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UserModel from "../model/user.model";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function loginAction(_state: any, { username, password }: { username: string; password: string; }) {
    try {
        if (!username || !password) {
            return { message: "provide username or password" };
        }
        const user = await UserModel.findByParams({ username, password });
        if (!user) {
            return { message: "username or password error" };
        }
        const secKey = new TextEncoder().encode(process.env.NEXT_APP_JWTTOKEN);
        const token = await new SignJWT({ _id: user._id, username: user.username }).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('30d').sign(secKey);
        cookies().set('Authorization', `${token}`);
        return redirect("/dashboard");

    } catch (error: any) {
        redirect("/dashboard");
    }
}