
export type ApiFetchOptions = {
    url: string
    query: string
    variables?: Variables
}

export type Variables = { [key: string]: string | string[] | undefined }

export type ApiFetchResults<T> = {
    data: T
}

export interface ApiConfig {
    apiUrl: string
    fetch<T>(
        options: ApiFetchOptions
    ): Promise<ApiFetchResults<T>>
}