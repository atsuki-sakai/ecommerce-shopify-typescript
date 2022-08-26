import type { InferGetStaticPropsType } from "next"
import getAllProducts from '@framework/product/get-app-products'
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"

export async function getStaticProps() {

  const config = getConfig()
  const products = await getAllProducts(config)
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="">
      { JSON.stringify(products)}
      <br/>
      { products[0].name }
    </div>
  )
}

Home.Layout = Layout