
"use server";


import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function loginOutAction() {
    try {
        
        cookies().delete('Authorization');
        return redirect("/login");

    } catch (error: any) {
        redirect("/dashboard");
    }
}