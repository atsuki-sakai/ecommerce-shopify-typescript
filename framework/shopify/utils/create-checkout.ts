import { ApiFeacher } from "@common/types/api"
import { SHOPIFY_CHECKOUT_ID_COOKIE, SHOPIFY_CHECKOUT_URL_COOKIE, SHOPIFY_COOKIE_EXPIRE } from "@framework/const"
import { CheckoutCreatePayload, Checkout, Maybe } from "@framework/shema"
import { checkoutCreateMutation } from "@framework/utils/mutations"
import Cookies from "js-cookie"

const createCheckout = async (fetch: ApiFeacher<{checkoutCreate: CheckoutCreatePayload}>): Promise<Maybe<Checkout | undefined>> => {
    console.log("framework/shopify/utils/create-checkout.ts")
    const { data } = await fetch({
        query: checkoutCreateMutation
    })
    const { checkout } = data.checkoutCreate;
    const checkoutId = checkout?.id

    if(checkoutId){
        // 90日でCookieを破棄する
        const options = {
            expires: SHOPIFY_COOKIE_EXPIRE
        }
        Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkoutId, options)
        Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE,  checkout?.webUrl, options)
    }
    return checkout
}

export default createCheckout