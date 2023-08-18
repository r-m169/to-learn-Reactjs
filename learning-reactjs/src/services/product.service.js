import { productsapp } from "../utils/interceptor";

export const getproducts = async () => {
    console.log("GET PRODUCTS RUNS");
    const axiosResponse = await productsapp.get('https://dummyjson.com/products');
    const products = axiosResponse.data;
    console.log("GET PRODUCTS FINISHED");
    return products;
}