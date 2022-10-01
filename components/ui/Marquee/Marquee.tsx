import React, { ReactNode, FC } from 'react'
import FastMarquee from 'react-fast-marquee' //https://www.npmjs.com/package/react-fast-marquee
import style from "./Marquee.module.css"
import cn from "classnames"

interface Props {
    children: ReactNode | ReactNode[]
    variant?: "primary" | "secondary"
}


const Marquee: FC<Props> = ({children, variant = "primary"}: Props) => {

    const rootClassName = cn(
        style.root,
        {
            [style.secondary]: variant === "secondary",
            [style.primary]: variant === "primary"
        }
    )

    return (
        <div className={rootClassName}>
            <FastMarquee gradient={false} speed={30}>
                <div className={style.container}>
                    { children }
                </div>
            </FastMarquee>
        </div>
    )
}

export default Marquee