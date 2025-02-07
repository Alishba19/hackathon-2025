import { createClient } from "@sanity/client"; 
import { getAllproductsQuery } from "./query";

// 🛠 Product type define kar diya hai
interface Product {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const client = createClient({
    projectId: "hcv1xxlv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-01-13",
});


// Function to Fetch products
export async function fetchproducts(): Promise<Product[]> {
    try {
        const products: Product[] = await client.fetch(getAllproductsQuery);
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }  
}

