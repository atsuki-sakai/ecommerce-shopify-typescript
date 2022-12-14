import getAllProductsQuery from "../../utils/queries/get-all-products";

const fetchApi = async () => {
    const url = "http://localhost:4000/graphql"
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json();
    return { data }
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchApi();
    return products.data;
}

export default getAllProducts