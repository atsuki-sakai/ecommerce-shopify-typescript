
import { fetchApi } from "@framework/utils";
import { ApiConfig } from '../../../.history/framework/common/types/api_20220826001542';

class Config {

    private config: ApiConfig

    constructor(config: ApiConfig){
        this.config = config
    }

    getConfig(): ApiConfig {
        return this.config;
    }

}

const configWarapper = new Config({
    apiUrl: "http://localhost:4000/graphql",
    fetch: fetchApi
})

export function getConfig() {
    return configWarapper.getConfig()
}