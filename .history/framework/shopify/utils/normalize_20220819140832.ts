import { Product as ShopifyProduct, ImageConnection, ImageEdge } from '../shema';
import { Product } from '@common/types/product';

const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}): any => {
    return edges.map(({node: { originalSrc: url, ...rest }}) => ({ url: `/images/${url}`, ...rest }))
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
        ...rest
    } = productNode;

    const product: Product = {
        id,
        name,
        vendor,
        description,
        images: normalizeProductImages(imageConnection),
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g,""),
        ...rest
    }
    return product;
}