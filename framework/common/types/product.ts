
export interface ProductImage {
    url: string
    altText?: string
}

export interface Product {
    id: string
    name: string
    description: string
    vendor: string,
    slug: string
    path: string
    images: ProductImage[]
}