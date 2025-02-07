import { createClient } from "@sanity/client";
import { getAllproductsQuery } from "./query";


const client = createClient({
    projectId: "hcv1xxlv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-01-13",
});


// Function to Fetch products
export async function fetchproducts(): Promise<any> {
    try {
        const products = await client.fetch(getAllproductsQuery);
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }  
}
