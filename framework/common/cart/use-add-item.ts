

import {
    useHook,
    useMutationHook
} from "@common/utils/use-hooks";


const useAddItem = () => {
    console.log("framework/common/use-add-item.ts")
    const hook = useHook((hooks) => hooks.cart.useAddItem)
    return useMutationHook({...hook});
}

export default useAddItem
