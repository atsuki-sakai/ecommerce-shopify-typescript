import getAllProductsQuery from "../../utils/queries/get-all-products";

type FetchParams = {
    query: string
}

const fetchApi = async ({ query }: {query: string}) => {
    const url = "http://localhost:4000/graphql"
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: getAllProductsQuery
        })
    })
    const data = await res.json();
    return { data }
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi();
    return products.data;
}

export default getAllProducts