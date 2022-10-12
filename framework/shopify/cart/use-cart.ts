
import useCart from "@common/cart/use-cart"
import { createCheckout } from "@framework/utils";
import { getCheckoutQuery } from "@framework/utils";
import { useMemo } from "react";

export default useCart

export const handler = {
    fetchOptions: {
        query: getCheckoutQuery
    },
    async fetcher({fetch, options, input: { checkoutId }}: any) {
        let checkout;
        console.log("framework/shopify/use-cart.ts => handler => fetcher")
        if(checkoutId){
            const { data } = await fetch({
                ...options,
                variables: {
                    checkoutId
                }
            })
            checkout = data.node
        }else{
            checkout = await createCheckout(fetch)
        }
        return checkout
    },
    useHook: ({useData}: any) => {
        console.log("framework/shopify/use-cart.ts => handler => useHook")
        const data = useData({
            swrOptions: {
                revalidateOnFocus: false
            }
        });
        return useMemo(() => {
            return data
        },[data])
    }
}