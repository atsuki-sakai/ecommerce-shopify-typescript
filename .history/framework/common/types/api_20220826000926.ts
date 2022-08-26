
export type ApiFetchOptions = {
    url: string
    query: string
}

export interface ApiConfig {

    apiUrl: string
    fetch<T>(
        options: ApiFetchOptions
    ): Promise<T>
}