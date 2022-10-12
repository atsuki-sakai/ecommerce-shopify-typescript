
import Cookies from "js-cookie"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "../const"

const getCheckoutId = () => {
    console.log("framework/shopify/utils/get-checkout-id.ts")
    return Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE);
}

export default getCheckoutId