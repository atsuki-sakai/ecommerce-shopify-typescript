import type { InferGetStaticPropsType } from "next"
import getAllProducts from '@framework/product/get-app-products'


export async function getStaticProps() {

  const products = await getAllProducts();
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="">
      { JSON.stringify(products) }
      <br/>
      { products[0].name }
    </div>
  )
}

export default Home