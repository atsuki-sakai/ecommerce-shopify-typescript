
import { fetchApi } from "@framework/utils";

class Config {

    private config: any

    constructor(config: any){
        this.config = config
    }

    getConfig(): any {
        return this.config;
    }

}

const configWarapper = new Config({
    apiUrl: "http://localhost:4000/graphql"
})