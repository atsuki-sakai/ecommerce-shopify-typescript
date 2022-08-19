import { 
    Product as ShopifyProduct
} from "../shema";

export function normalizeProductImages() {

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
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g,""),
        ...rest
    }
    return product;
}