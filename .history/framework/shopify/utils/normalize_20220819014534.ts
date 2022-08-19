import { Product as ShopifyProduct, ImageConnection, ImageEdge } from '../shema';

export function normalizeProductImages({edges}: {edges: Array<ImageEdge>}) {
    edges.map(({node: { originalSrc: url, ...rest }}) => {
        return {
            url: `/images/${url}`,
            ...rest
        }
    })
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