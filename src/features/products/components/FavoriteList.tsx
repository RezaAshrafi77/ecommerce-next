import { useFavorites } from "@/store/useFavorites"
import { Grid, Typography } from "@mui/material"
import ProductCard from "./ProductCard"

export default function FavoriteList() {
    const { favorites } = useFavorites()

    if (favorites.length === 0) return null

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Favorite Products
            </Typography>
            <Grid container spacing={2} mb={4}>
                {favorites.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
