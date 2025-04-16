"use client"

import { Box, CircularProgress, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getProducts, Product } from "../services/productService"
import SearchSortBar from "./SearchSortBar"
import ProductGrid from "./ProductGrid"
import PaginationBar from ".//PaginationBar"
import FavoriteList from "./FavoriteList"

const LIMIT = 8

export default function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState<"asc" | "desc">("desc")

    const skip = (page - 1) * LIMIT

    useEffect(() => {
        const fetch = async () => {
            setLoading(true)
            const res = await getProducts({ limit: LIMIT, skip, search, sort })
            setProducts(res.products)
            setTotal(res.total)
            setLoading(false)
        }
        fetch()
    }, [page, search, sort])

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Products
            </Typography>

            <SearchSortBar
                search={search}
                sort={sort}
                onSearchChange={setSearch}
                onSortChange={setSort}
            />

            {/* علاقه‌مندی‌ها - در مرحله بعد */}
            <FavoriteList />

            {loading ? (
                <Box display="flex" justifyContent="center" py={4}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <ProductGrid products={products} />
                    <PaginationBar
                        page={page}
                        total={total}
                        limit={LIMIT}
                        onPageChange={setPage}
                    />
                </>
            )}
        </Container>
    )
}
