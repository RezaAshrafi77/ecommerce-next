import { getProductById } from "@/features/products/services/productService"
import { useQuery } from "@tanstack/react-query"

export const useProduct = (id: number) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    })
}
