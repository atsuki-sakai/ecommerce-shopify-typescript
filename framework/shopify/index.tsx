
import { ReactNode, FC } from "react";
import { getConfig } from "./api/config";
import {
    ApiProvider as CoreApiProvider,
    useApiProvider as useApiProviderCore
} from "@common"
import { shopifyHooks } from "./hooks";

interface Props {
    children : ReactNode | ReactNode[]
}
const config = getConfig();
export const ApiProvider: FC<Props> = ({children}: Props) => {
    console.log("framework/shopify/index.tsx => CoreApiProvider")
    return (
        <CoreApiProvider config={{...config}} hooks={shopifyHooks}>
            { children }
        </CoreApiProvider>
    )
}

export const useApiProvider = () => useApiProviderCore();