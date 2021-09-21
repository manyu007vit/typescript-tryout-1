import React from "react";

interface SearchBarProps {
    placeholder?: string | undefined
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ placeholder, onChange }: SearchBarProps) => {

    return (
        <div className="mt-2 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md bg-white">
            <input className="flex-grow outline-none h-5 text-gray-600 focus:text-gray-700" type="text" placeholder={placeholder} onChange={onChange} />
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </span>
        </div>

    )
}

export default SearchBar;