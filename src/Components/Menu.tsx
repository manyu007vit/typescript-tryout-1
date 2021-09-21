interface MenuProps {
    label?: String
    icon?: JSX.Element
}

const Menu = ({ label, icon }: MenuProps) => {
    return (
        <div className="dark:bg-gray-900 bg-gray-50 dark:text-white text-black align-baseline p-0 pt-1 rounded-t-xl h-8 w-auto px-5 shadow-2xl flex justify-center">
            {label && <div>{label}</div>}
            {icon && <div className="m-auto w-auto">{icon}</div>}
        </div>
    )
}

export default Menu;