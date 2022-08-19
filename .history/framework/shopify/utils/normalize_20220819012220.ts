import {
    Product as ShopifyProduct
} from "../shema";

export function normalizeProduct(productNode: ShopifyProduct): any {
    const {
        id,
        title: name,
        handle,
        vendor,
        description
    } = productNode;
}