
import { useApiProvider } from "@common"
import { ApiFeacher } from "@common/types/api";
import { ApiHooks } from "@common/types/hooks";
import { MutationHook } from "@common/types/hooks";
import useSWR from "swr"

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
    console.log("framework/common/utils/use-hooks.ts  => useHook")
    const { hooks } = useApiProvider();
    return fn(hooks);
}

export const useMutationHook = (hook: MutationHook) => {
    console.log("framework/common/utils/use-hooks.ts  => useMutaitonHook")
    const { fetcher } = useApiProvider();
    return hook.useHook({
        fetch: async (input: any) => {
            return await hook.fetcher({
                input,
                fetch: fetcher,
                options: hook.fetchOptions
            })
        }
    })
}

const useData = (hook: any, fetcher: ApiFeacher, ctx: any) => {

    console.log("framework/common/utils/use-hooks.ts  => useData")

    const hookFetcher = async (query: string) => {
        try{
            return await hook.fetcher({
                fetch: fetcher,
                options: { query },
                input: {}
            })
        } catch(error) {
            throw error;
        }
    }

    const response = useSWR(
        hook.fetchOptions.query,
        hookFetcher,
        ctx.swrOptions
    )
    return response;
}

export const useSWRHook = (hook: any) => {
    console.log("framework/common/utils/use-hooks.ts  => useSWRHook")
    const { fetcher } = useApiProvider();
    return  hook.useHook({
        useData(ctx: any) {
            const data = useData(hook, fetcher, ctx)
            return data;
        }
    })
}