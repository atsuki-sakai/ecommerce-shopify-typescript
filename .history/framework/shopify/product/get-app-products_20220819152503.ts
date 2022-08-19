import getAllProductsQuery from '../utils/queries/get-all-products';
import { normalizeProduct, fetchApi } from '../utils';
import { ProductConnection } from '../shema';
import { Product } from '@common/types/product';


type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {

    const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery});
    const products = data.products.edges.map(({node: product}) => {
        return normalizeProduct(product);
    }) ?? [];
    return products;
}

export default getAllProducts