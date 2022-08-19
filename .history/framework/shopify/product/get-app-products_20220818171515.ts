import getAllProductsQuery from '../utils/queries/get-all-products';
import fetchApi from '../utils/fetch-api';
import { ProductConnection } from '../shema';

const getAllProducts = async (): Promise<ProductConnection> => {
    const products = await fetchApi<ProductConnection>({query: getAllProductsQuery});
    return products.data;
}

export default getAllProducts