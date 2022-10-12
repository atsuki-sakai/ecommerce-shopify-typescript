
import { useAddItem } from "@common/cart";
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils";
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations"

export default useAddItem

export const handler: MutationHook = {
    fetchOptions:{
        query: checkoutLineItemsAddMutation
    },
    fetcher: async ({fetch, options, input}) => {
        console.log("framework/shopify/use-add-item.ts => handler => fetcher")
        const variables = {
            checkoutId: getCheckoutId(),
                lineItems: [
                    {
                        variantId: input.variantId,
                        quantity: 1
                    }
                ]
        }
        const response = await fetch({
            ...options,
            variables: variables
        });
        return response;
    },
    useHook: ({fetch}) => {
        console.log("framework/shopify/use-add-item.ts => handler => useHook")
        return async (input: any) => {
            const response = await fetch(input)
            return {
                output: response
            }
        }
    }
}