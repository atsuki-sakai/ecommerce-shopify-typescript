import React, { FC, ReactNode } from 'react'
import style from "./ProductSlider.module.css"

type Props = {
    children: ReactNode | ReactNode[]
}

const ProductSlider: FC<Props> = ({children}: Props) => {
    return (
        <div className={style.root}>
            <div className="h-full transition-opacity">
                { children }
            </div>
        </div>
    )
}

export default ProductSlider