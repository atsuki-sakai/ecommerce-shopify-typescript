import type { InferGetStaticPropsType } from "next"
import getAllProducts from '@framework/product/get-app-products'
import { getConfig } from "@framework/api/config";
import { fetchApi } from '@framework/utils';


export async function getStaticProps() {

  const config = getConfig()
  console.log("config :",config.apiUrl);

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
      { JSON.stringify(products)}
      <br/>
      { products[0].name }
    </div>
  )
}

export default Home