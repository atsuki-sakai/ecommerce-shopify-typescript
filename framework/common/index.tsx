
import { createContext, FC, ReactNode, useContext, useMemo } from "react"
import { ApiConfig, ApiProviderContext } from "./types/api";
import { ApiHooks } from "./types/hooks";

interface Props {
    children: ReactNode | ReactNode[]
    config: ApiConfig
    hooks: ApiHooks
}

// Partial型を付与してパラメータをオプショナル型にする。
export const ApiContext = createContext<Partial<ApiProviderContext>>({});

export const ApiProvider:  FC<Props> = ({children, config, hooks}: Props) => {
    console.log("framework/common/index => ApiProvider")
    const coreConfig = useMemo(() => {
        return {
            fetcher: config.fetch,
            hooks: hooks,
            checkoutCookie: config.checkoutCookie
        }
    }, [config.fetch, hooks, config.checkoutCookie])
    return (
        <ApiContext.Provider value={coreConfig}>
            { children }
        </ApiContext.Provider>
    )
}

export const useApiProvider = () => {
    return useContext(ApiContext) as ApiProviderContext;
}