import type { Product } from '@common/types/product'
import React, { FC } from 'react'
import Link from "next/link"
import Image from "next/image"
import style from "./ProductCard.module.css"

type Props = {
    product: Product
    variant: "simple" | "slim"
}


export const placeholderImage = "/images/product-image-placeholder.svg"

const ProductCard: FC<Props> = ({product, variant = "simple"}) => {

    return (
        <Link 
            href={{
                pathname: `/products/${product.slug}`,
            }} passHref>
            <a className={style.root}>
                {
                    variant === "slim" ?
                    // Slim 
                    <>
                        <div className='inset-0 flex justify-center items-center absolute z-20'>
                            <span className='bg-black text-white font-bold p-3 text-xl'>
                                { product.name }
                            </span>

                        </div>
                        {
                            product.images && (
                                <Image
                                    alt={product.name ?? "Product Image"}
                                    src={product.images[0].url ?? placeholderImage}
                                    height={320}
                                    width={320}
                                    quality="85"
                                    layout='fixed'
                                    className={style.productImage}
                                />
                            )
                        }
                    </> : (
                    // Simple
                    <>
                        <div className={style.productBg}></div>
                        <div className={style.productTag}>
                            <h3 className={style.productTitle}>
                                <span>
                                    { product.name }
                                </span>
                            </h3>
                            <span className={style.productPrice}>{ product.price.value } $</span>
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
                    </>
                    )
                }
            </a>
        </Link>
    )
}

export default ProductCard