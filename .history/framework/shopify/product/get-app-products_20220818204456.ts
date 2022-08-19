import getAllProductsQuery from '../utils/queries/get-all-products';
import fetchApi from '../utils/fetch-api';
import { ProductConnection } from '../shema';
import nodeTest from 'node:test';

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery});

    const products = data.products.edges.map(({node: product}) => {
        return product;
    }) ?? [];
    return products;
}

export default getAllProducts