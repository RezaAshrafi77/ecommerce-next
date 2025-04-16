import axios from "@/libs/axios"

export interface Product {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    createdAt: string
}

interface ProductResponse {
    products: Product[]
    total: number
    skip: number
    limit: number
}

export const getProducts = async (params: {
    limit?: number
    skip?: number
    search?: string
    sort?: "asc" | "desc"
}): Promise<ProductResponse> => {
    const { limit = 10, skip = 0, search = "", sort = "desc" } = params
    const res = await axios.get("/products/search", {
        params: { q: search, limit, skip },
    })

    let sorted = res.data.products
    if (sort === "asc") {
        sorted = sorted.sort((a: Product, b: Product) =>
            a.createdAt > b.createdAt ? 1 : -1
        )
    } else {
        sorted = sorted.sort((a: Product, b: Product) =>
            a.createdAt < b.createdAt ? 1 : -1
        )
    }

    return { ...res.data, products: sorted }
}
