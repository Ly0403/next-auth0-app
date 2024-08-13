/* eslint-disable @typescript-eslint/ban-types */
'use client'

export default function ButtonComponent({ btnText, onClick }: { btnText: string; onClick: Function }) {
    return (
        <div>
            <button onClick={() => onClick()} className="p-2 bg-lime-200 mt-10 w-40 rounded-lg text-red-950 font-serif text-sm font-bold">{btnText}</button>
        </div>
    );
}