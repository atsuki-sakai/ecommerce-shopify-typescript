import { normalizeProduct, fetchApi, getAllProductsQuery } from '../utils';
import { ProductConnection } from '../shema';
import { Product } from '@common/types/product';
import { ApiConfig } from '@common/types/api';


type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
    const { data } = await fetchApi<ReturnType>({
        url: config.apiUrl,
        query: getAllProductsQuery
    });
    const products = data.products.edges.map(({node: product}) => {
        return normalizeProduct(product);
    }) ?? [];
    return products;
}

export default getAllProducts