import React, { FC, ReactNode, ComponentType, HTMLAttributes } from 'react'
import style from "./Container.module.css"

interface Props {
    children: ReactNode | ReactNode[]
    el?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container: FC<Props> = ({children, el: Component = "div" as any}: Props) => {
    return (
        <Component  style={{}} className={style.root}>
            {children}
        </Component>
    )
}

export default Container