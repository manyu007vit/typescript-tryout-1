interface LabelProps {
    label: String
}

const Label = ({ label }: LabelProps) => {
    return (
        <span className="text-xs mr-1 uppercase rounded-sm dark:bg-gray-700 bg-red-200 text-black dark:text-white px-2 py-1 border border-gray-400">
            {label}
        </span>
    )
}

export default Label;