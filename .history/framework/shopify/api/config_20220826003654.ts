
import { fetchApi } from "@framework/utils";
import { ApiConfig } from '@common/types/api';

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