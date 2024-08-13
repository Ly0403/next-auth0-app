/* eslint-disable @typescript-eslint/ban-types */
'use client'

export default function InputComponent({ type, placeholder, label, onChange }: { type: string; placeholder: string; label: string; onChange: Function }) {
    return (
        <div className="flex flex-col">
            <label className="text-gray-300 text-md font-serif my-2">{label}</label>
            <input onChange={(e) => onChange(e)} placeholder={placeholder} type={type} className=" shadow-2xl shadow-red-950 p-2 rounded-md hover:bg-orange-100 text-lg font-serif text-black" />
        </div>
    );
}