import { useApiProvider } from "@common";
import { ApiHooks } from "@common/types/hooks";
import { useHook, useSWRHook } from "@common/utils/use-hooks"
import Cookies from "js-cookie";

const useCart = () => {
    console.log("framework/common/use-cart.ts")
    const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart);
    const { checkoutCookie } = useApiProvider()
    const fetcherWrapper: typeof hook.fetcher = (context) => {
        context.input.checkoutId= Cookies.get(checkoutCookie)
        return hook.fetcher(context)
    }
    return useSWRHook({...hook, fetcher: fetcherWrapper})
}

export default useCart