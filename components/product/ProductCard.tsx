import type { Product } from '@common/types/product'
import React, { FC } from 'react'
import Link from "next/link"
import Image from "next/image"
import style from "./ProductCard.module.css"

type Props = {
    product: Product
}

export const placeholderImage = "/images/product-image-placeholder.svg"

const ProductCard: FC<Props> = ({product}) => {
    return (
        <Link 
            href={{
                pathname: `products/${product.slug}`,
            }} passHref>
            <a className={style.root}>
                <div className={style.productBg}></div>
                <div className={style.productTag}>
                    <h3 className={style.productTitle}>
                        <span>
                            { product.name }
                        </span>
                    </h3>
                    <span className={style.productPrice}>14 $</span>
                </div>
                {
                    product.images && (
                        <Image
                            alt={product.name ?? "Product Image"}
                            src={product.images[0].url ?? placeholderImage}
                            height={540}
                            width={540}
                            quality="85"
                            layout='responsive'
                            className={style.productImage}
                        />
                    )
                }
            </a>
        </Link>
    )
}

export default ProductCard