import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from '@framework/product'
import { getConfig } from "@framework/api/config"
import { ProductCard } from "@components/product"
import { Grid, Hero, Marquee } from "@components/ui"
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
    <>
      <Grid layout="A">
        {
          products.slice(0,3).map(product =>
            <ProductCard key={product.id}product={product} variant={"simple"}/>
          )
        }
      </Grid>
      <Hero
        headline="Cookies, ice cream and muffin"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Marquee variant="secondary">
        {
          products.slice(0,3).map(product =>
            <ProductCard key={product.id}product={product} variant={"slim"}/>
          )
        }
      </Marquee>
      <Grid layout="B">
        {
          products.slice(0,3).map(product =>
            <ProductCard key={product.id}product={product} variant={"simple"}/>
          )
        }
      </Grid>
    </>
  )
}

Home.Layout = Layout