
import React, { FC, ReactNode, Children, isValidElement, cloneElement, useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import cn from "classnames"
import style from "./ProductSlider.module.css";

// ProductSliderの子要素に対してclassName="keen-slider__slide"を付与している

type Props = {
    children: ReactNode | ReactNode[] | any;
};

const ProductSlider: FC<Props> = ({ children }: Props) => {

    const initalSlide = 0
    const [currentSlide, setCurrentSlide] = useState<number>(initalSlide)
    const [ sliderRef, slider ] = useKeenSlider({
        initial: initalSlide,
        loop: true,
        slideChanged(slide) {
            setCurrentSlide(slide.track.details.rel)
        },
    })

    return (
        <div className={style.root}>
            <div ref={sliderRef} className="keen-slider h-full transition-opacity">
                <button
                    onClick={ () => slider.current?.prev() }
                    className={cn(style.leftControl, style.control)}
                />
                <button
                    onClick={ () => slider.current?.next() }
                    className={cn(style.rightControl, style.control)}
                />
                <div className="absolute top-2 right-4">
                    <div className={style.counter}>
                        { currentSlide + 1 }/{ children.length }
                    </div>
                </div>
                {
                    Children.map(children, (child) => {
                        if(isValidElement(child)) {
                            const props = child.props as { [key: string]: string }
                            return cloneElement(child, {
                                className:  props.className ? `${props.className} keen-slider__slide` : "keen-slider__slide"
                            } as HTMLDivElement )
                        }
                        return child;
                    })
                }
            </div>
        </div>
    );
};

export default ProductSlider;
