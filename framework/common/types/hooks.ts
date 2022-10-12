import { ApiFeacher, ApiFetchOptions } from "./api"

export interface ApiHooks {
    cart: {
        useAddItem: MutationHook
        useCart: any
    }
}

export type MutationHookContext = {
    fetch: (input: any) => any
}

export type FetcherHookContext = {
    input? : any
    fetch: ApiFeacher
    options: ApiFetchOptions
}

export type MutationHook = {
    fetchOptions: ApiFetchOptions,
    fetcher: (context: FetcherHookContext) => any
    useHook(context: MutationHookContext): (input: any) => any
}