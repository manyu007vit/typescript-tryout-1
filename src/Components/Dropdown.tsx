import React from "react";

interface DropdownProps {
    title?: string | undefined
    options?: string[] | number[]
    value?: string | number | undefined
    size: "small" | "medium"
    onChange?: React.ChangeEventHandler
}

const Dropdown = ({ title, value, size, options, onChange }: DropdownProps) => {
    const sizeStyle = size === "medium" ? "h-10 pl-5 pr-10 rounded-full" : "h-8 pl-2 pr-8 text-md rounded-md"
    const iconStyle = size === "medium" ? "top-0 right-0 m-4" : "-top-1 -right-1 m-4"
    return (
        <div className="relative inline-flex">
            {
                title && <span className="mt-1 mx-2 dark:text-white text-black">{title}</span>
            }
            <svg className={`w-2 h-2 absolute ${iconStyle} pointer-events-none`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
            <select
                value={value}
                className={` ${sizeStyle} border border-gray-300 text-gray-600 bg-white hover:border-gray-400 focus:outline-none appearance-none`}
                onChange={onChange}
            >
                <option value={"None"}>---</option>
                {
                    options && options.length > 0 && options.map((op, index) => <option key={index} value={op}>{op}</option>)
                }
            </select>
        </div>
    )
}

export default Dropdown;