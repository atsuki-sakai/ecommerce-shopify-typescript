import React from 'react'
import {
    GetStaticPaths,
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType
} from 'next'
import { slug } from "@styles/pages"
import { Layout } from '@components/common'
import { getConfig } from '@framework/api/config'
import { createProductsPaths } from '@framework/utils'
import { getProduct, getAllProductsPaths } from '@framework/product'
import { Container } from '@components/ui'
import type { Product } from '@common/types/product'

const ProductSlug = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const p = product as Product;
    return (
            <Container>
                <p>id  : { p.id }</p>
                <p>name : { p.name }</p>
                <p>price : {p.price.value}$</p>
                <p>vendor : {p.vendor}</p>
                <p>description : {p.description}</p>
                <h1 className='leading-4 uppercase'>Options</h1>
                <div>
                    {
                        p.options.map((option, index) => {
                            return <ul key={index}>
                                    <p className={slug.optionTitle}>{option.displayName}</p>
                                        {
                                            option.values.map((value,index) => {
                                                return <li key={index} className={slug.options}>
                                                    {
                                                        value.hexColor ? <p>hexColor: {value.hexColor}</p> : <p>label: {value.label}</p>
                                                    }
                                                    </li>;
                                            })
                                        }
                                    </ul>;
                        })
                    }
                </div>
                <h1 className='mb-4 leading-4 uppercase'>Variants</h1>
                <div>
                    {
                        p.variatns.map((variant, index) => {
                            return <div key={index}>
                                <p className={slug.optionTitle}>VariantName: {variant.name}</p>
                                    {
                                        variant.options.map((option, index) => {
                                            return <div className={slug.options} key={index}>
                                                <p>Name: {option.displayName}</p>
                                                {
                                                    option.values.map((value, index) => {
                                                        return <div key={index} className={slug.options}>
                                                        {
                                                            value.hexColor ? <p>hexColor: {value.hexColor}</p> : <p>label: {value.label}</p>
                                                        }
                                                        </div>;
                                                    })
                                                }
                                            </div>;
                                        })
                                    }
                            </div>;
                        })
                    }
                </div>
            </Container>
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