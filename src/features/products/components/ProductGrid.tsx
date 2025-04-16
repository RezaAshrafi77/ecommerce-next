import Grid from "@mui/material/Grid"
import ProductCard from "./ProductCard"
import { Product } from "../services/productService"

export default function ProductGrid({ products }: { products: Product[] }) {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid
                    size={{ xs: 12, sm: 6, md: 3 }}
                    sx={{
                        gap: "12px",
                    }}
                    key={product.id}
                >
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}
