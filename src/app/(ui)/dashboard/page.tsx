/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import loginOutAction from "@/app/actions/logout";
import ButtonComponent from "@/app/components/button";
import { useActionState } from "react";


export default function Dashboard() {
    const [state, action] = useActionState(loginOutAction, "");
    return (
        <div className="h-screen bg-slate-200">
            <div className="p-4">
                <ButtonComponent onClick={action} btnText="Logout"/>
                {state}
            </div>
        </div>
    );
}