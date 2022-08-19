import { Product as ShopifyProduct, ImageConnection, ImageEdge } from '../shema';

const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}): any => {
    return edges.map(({node: { originalSrc: url, ...rest }}) => ({ url: `/images/${url}`, ...rest }))
}

export function normalizeProduct(productNode: ShopifyProduct): any {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
        ...rest
    } = productNode;

    const product = {
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