
import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cn from "classnames"
import style from "./Button.module.css"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[]
}

const Button: FC<Props> = ({children, className, ...rest}: Props) => {
    return (
        <button className={cn(style.root, className)} type="button" {...rest}>
            { children }
        </button>
    )
}

export default Button