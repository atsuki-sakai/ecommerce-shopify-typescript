
import cn from 'classnames'
import { FC, useState } from 'react'
import s from './ProductView.module.css'
import { Button, Container } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'
import ProductSlider from '../ProductSlider'
import Swatch from '../Swatch'
import { useUI } from '@components/ui/context'
import { Choices, getVariant } from '../helpers'

//Tips - オブジェクトのキーに変数を展開する方法 { [変数]: any } // https://www.white-space.work/assign-variables-to-key-of-object-in-javascript/#:~:text=%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E3%82%AD%E3%83%BC%E3%82%92%E6%8C%87%E5%AE%9A,%E3%81%A8%E3%80%81%E5%A4%89%E6%95%B0%E5%B1%95%E9%96%8B%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82

interface Props {
    product: Product
}
const ProductView: FC<Props> = ({ product }) => {

    const { openSideBar } = useUI()
    const [ choices, setChoices ] = useState<Choices>({})
    const variant = getVariant(product, choices)

    console.log('variant : ', variant)
    const addToCart = () => {

        try {
            const item = {
                productId: product.id,
                variantId: variant?.id,
                variantOptions: variant?.options
            }
            alert(JSON.stringify(item, null, 2))
            openSideBar();
        }catch(e) {

        }
    }
    return (
        <Container>
            <div className={cn(s.root, 'fit', 'mb-5')}>
                <div className={cn(s.productDisplay, 'fit')}>
                <div className={s.nameBox}>
                    <h1 className={s.name}>{ product.name }</h1>
                    <div className={s.price}>
                    { product.price.value }
                    {` `}
                    { product.price.currencyCode }
                    </div>
                </div>
                <ProductSlider>
                    {
                        product.images.map((image, index) => {
                            return (
                                <div key={index} className={s.imageContainer}>
                                    <Image
                                    className={s.img}
                                    src={image.url}
                                    alt={image.altText ?? "Product Image"}
                                    width={1050}
                                    height={1050}
                                    quality="85"
                                    />
                                </div>
                            )
                        })
                    }
                </ProductSlider>
                </div>
                <div className={s.sidebar}>
                    {product.options.map((option, index) =>
                        <div key={index}>
                            <h2 className=''>{ option.displayName }</h2>
                            <div className='flex items-row py-4'>
                                {
                                    option.values.map((value) => {
                                        const activeChoice = choices[option.displayName.toLowerCase()]
                                        return (
                                            <Swatch
                                                active={value.label === activeChoice}
                                                key={`${option.id}-${value.label}`}
                                                label={value.label}
                                                color={value.label}
                                                variant={option.displayName}
                                                onClick={() => {
                                                    setChoices({
                                                        ...choices,
                                                        [option.displayName.toLowerCase()]: value.label.toLowerCase()
                                                    })
                                                }}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )}
                <section>
                    <div className="pb-4">
                    <h2 className="uppercase font-medium">Color</h2>
                    <div className="flex flex-row py-4">
                        { JSON.stringify(variant, null, 2)}
                    </div>
                    </div>
                    <div className="pb-14 break-words w-full max-w-xl text-lg">
                        { product.description }
                    </div>
                </section>
                <div>
                    <Button className='' onClick={(e) => addToCart()}>
                        Add to Cart
                    </Button>
                </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductView