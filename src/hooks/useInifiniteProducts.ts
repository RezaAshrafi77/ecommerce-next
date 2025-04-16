import { getProducts } from "@/features/products/services/productService"
import { useInfiniteQuery } from "@tanstack/react-query"

const LIMIT = 8

export const useInfiniteProducts = (search: string, sort: "asc" | "desc") => {
    return useInfiniteQuery({
        queryKey: ["products", search, sort],
        queryFn: ({ pageParam = 0 }) =>
            getProducts({
                skip: pageParam,
                limit: LIMIT,
                search,
                sort,
            }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const totalFetched = allPages.reduce(
                (sum, page) => sum + page.products.length,
                0
            )
            return totalFetched < lastPage.total ? totalFetched : undefined
        },
    })
}
