import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type { InferGetStaticPropsType } from "next"
import getAllProducts from '../framework/shopify/product/get-app-products'


export async function getStaticProps() {

  const products = await getAllProducts();
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

const Home = ({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      { products }
    </div>
  )
}

export default Home