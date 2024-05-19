import { ReactNode } from "react"

export const Button = ({ children }:{ children: ReactNode}) => {
    return <div>
        <button className="px-4 py-2 rounded-xl border cursor-pointer border-neutral-200 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">{children}</button>
    </div>
}