import {
    ApiFetchResults,
    ApiFetchOptions
    } from "@common/types/api"

const fetchApi = async <T> ({ query, url, variables }: ApiFetchOptions ): Promise<ApiFetchResults<T>> => {

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query,
                variables
            })
        })
        const { data, errors } = await res.json();
        if(errors) {
            throw new Error(errors[0].message ?? errors.message);
        }
        return { data }
}

export default fetchApi