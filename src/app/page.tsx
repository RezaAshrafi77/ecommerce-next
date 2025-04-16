"use client"
import { Box, CircularProgress, Container, Typography } from "@mui/material"
import { useState } from "react"
import { useInfiniteProducts } from "@/hooks/useInifiniteProducts"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import FavoriteList from "@/features/products/components/FavoriteList"
import SearchSortBar from "@/features/products/components/SearchSortBar"
import ProductGrid from "@/features/products/components/ProductGrid"

export default function ProductListPage() {
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState<"asc" | "desc">("desc")

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
        useInfiniteProducts(search, sort)

    const loaderRef = useIntersectionObserver(() => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
        }
    })

    const products = data?.pages.flatMap((page) => page.products) || []

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                {"Products"}
            </Typography>
            <SearchSortBar
                search={search}
                sort={sort}
                onSearchChange={setSearch}
                onSortChange={setSort}
            />
            <FavoriteList />
            {products.length == 0 && search ? (
                <Box display="flex" justifyContent="center" py={4}>
                    <Typography variant="h6">
                        No products found for {`'${search}'`}
                    </Typography>
                </Box>
            ) : null}
            <ProductGrid products={products} />
            {(isFetchingNextPage || isLoading) && (
                <Box display="flex" justifyContent="center" py={4}>
                    <CircularProgress />
                </Box>
            )}
            <div ref={loaderRef} />
        </Container>
    )
}
