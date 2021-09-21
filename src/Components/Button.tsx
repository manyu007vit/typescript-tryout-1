import React from "react";

interface ButtonProps {
    label: string
    onClick?: React.MouseEventHandler
    size?: "small" | "medium"

}


const Button = ({ label, onClick, size = "medium" }: ButtonProps) => {
    const sizeStyle = size === "medium" ? "py-3 px-6 rounded-lg" : "py-1 px-2 text-sm rounded-md"
    return (
        <button
            className={` ${sizeStyle} text-white  bg-gray-500 shadow-lg block md:inline-block`}
            onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;