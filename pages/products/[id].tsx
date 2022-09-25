import React from 'react'
import { useRouter } from 'next/router'
import { Product, ProductImage } from '@common/types/product';
import Image from 'next/image';
import s from "./id.module.css"
import { placeholderImage } from '@components/product/ProductCard';

const ProductHandle = () => {
    return (
        <div className={s.container}>
            HELLO
        </div>
    )
}

export default ProductHandle