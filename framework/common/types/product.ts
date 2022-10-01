
export interface ProductImage {
    url: string
    altText?: string
}

export interface ProductPrice {
    value: number
    currencyCode: "USD" | "EUR" | "JPY"
}
export interface Product {
    id: string
    name: string
    description: string
    vendor: string
    slug: string
    path: string
    images: ProductImage[]
    price: ProductPrice
}