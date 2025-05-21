import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    deEmphasize?: true | false;
}


export default function Button ({ children, className, deEmphasize = false, type = "button", ...props }: ButtonProps) {
    const importanceStyles = deEmphasize? "border-blue-700 text-grey-800 hover:bg-blue-800 bg-transparent" : "border-transparent text-white bg-blue-700 hover:bg-blue-900"

    return (
        <button {...props} type={type} className={`border border-solid transition-colors py-2 px-6 rounded flex items-center justify-center ${importanceStyles} ${className}`}>
            {children}
        </button>
    )
}

