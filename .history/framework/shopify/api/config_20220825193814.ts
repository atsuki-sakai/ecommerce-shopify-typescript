
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