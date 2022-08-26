
import { fetchApi } from "@framework/utils";
import { ApiConfig } from '../../../.history/framework/common/types/api_20220826000926';

class Config {

    private config: ApiConfig

    constructor(config: ApiConfig){
        this.config = config
    }

    getConfig(): ApiConfig {
        return this.config;
    }

}

const configWrapper = new Config({
    apiUrl: "http://localhost:4000/graphql",
    fetch: fetchApi
})

export function getConfig() {
    return configWrapper.getConfig()
}