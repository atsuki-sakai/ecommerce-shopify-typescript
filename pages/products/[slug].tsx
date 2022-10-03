import React from 'react'
import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType
} from 'next'
import { Layout } from '@components/common'
import { getConfig } from '@framework/api/config'
import { createProductsPaths } from '@framework/utils'
import { getProduct, getAllProductsPaths } from '@framework/product'
import { ProductView } from '@components/product'
import type { Product } from '@common/types/product'

const ProductSlug = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const p = product as Product;
    return (
        <>
            { p && <ProductView product={p}/> }
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    const config = getConfig();
    const { products } = await getAllProductsPaths(config);
    const slugs = products.map((product) => product.slug)
    const paths = createProductsPaths(slugs)

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {

    const config = getConfig()
    const { product } = await getProduct({
        config,
        variables: { slug: params?.slug } // variablesとして渡した{ slug: 値 }のslugをキーにしてgraphqlで展開される
    });
    return {
        props: {
            product
        }
    }
}


ProductSlug.Layout = Layout;

export default ProductSlug