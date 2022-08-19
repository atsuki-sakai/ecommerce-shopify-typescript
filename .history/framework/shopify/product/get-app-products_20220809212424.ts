


const fetchApi = async () => {
    const url = "https://jsonplaceholder.typecode.com/todos"
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json();
}

const getAllProducts = async (): Promise<number[]> => {
    const products = [1,2,3,4,5,6,7,8,9,10]
    return products;
}

export default getAllProducts