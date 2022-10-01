import { Product as ShopifyProduct, ImageEdge, MoneyV2 } from '../shema';
import { Product, ProductPrice } from '@common/types/product';

const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}): any => {
    return edges.map(({node: { originalSrc: url, ...rest }}) => ({ url: `/images/${url}`, ...rest }))
}

const normarizeProductPrice= ({currencyCode, amount}: MoneyV2) => ({
    value: +amount,
    currencyCode
})

export function normalizeProduct(productNode: ShopifyProduct): Product {
    const {
        id,
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
        priceRange,
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
        price: normarizeProductPrice(priceRange.minVariantPrice) as ProductPrice,
        ...rest
    }
    console.log("currencyCode :",priceRange.minVariantPrice.currencyCode);
    return product;
}