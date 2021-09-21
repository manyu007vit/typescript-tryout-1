import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    multiple?: boolean
    rows?: number
    onChange: React.ChangeEventHandler<HTMLElement>
}

const Input = ({ label, name, multiple, rows, onChange }: InputProps) => {

    return (
        <div>
            <div className="mt-2 mb-2 relative text-gray-900 dark:text-gray-100">
                <label className="block pb-2 px-2 pointer-events-none cursor-text text-sm">{label}</label>
                {
                    multiple ?
                        <textarea
                            aria-label="Test label"
                            className="outline-none resize-none px-4 rounded-t text-black dark:text-gray-100 w-full border border-gray-700 dark:border-gray-500 dark:focus:border-gray-100 rounded bg-white dark:bg-black py-2 duration-200 ease-in caret-primary-500"
                            placeholder=""
                            name={name}
                            rows={rows}
                            onChange={onChange} />
                        :
                        <input
                            aria-label="Test label"
                            className="outline-none px-4 rounded-t text-black dark:text-gray-100 w-full border border-gray-700 dark:border-gray-500 dark:focus:border-gray-100 rounded bg-white dark:bg-black py-2 duration-200 ease-in caret-primary-500"
                            placeholder=""
                            name={name}
                            onChange={onChange} />
                }
            </div>
        </div>
    )
}

export default Input;