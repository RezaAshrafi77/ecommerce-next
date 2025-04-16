import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
} from "@mui/material"
import { Product } from "../services/productService"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { useFavorites } from "@/store/useFavorites"
import Link from "next/link"

export default function ProductCard({ product }: { product: Product }) {
    const { toggleFavorite, isFavorite } = useFavorites()
    const fav = isFavorite(product.id)

    return (
        <Card
            sx={{
                textDecoration: "none",
                position: "relative",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
                component={Link}
                href={`/products/${product.id}`}
            >
                <CardMedia
                    component={"img"}
                    height={"240"}
                    image={product.thumbnail}
                    alt={product.title}
                    style={{
                        objectFit: "contain",
                        marginBottom: 12,
                    }}
                />
                <Typography variant="h6" fontSize={16}>
                    {product.title}
                </Typography>
                <Typography mt={1} variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
            </CardContent>

            <IconButton
                size="small"
                onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(product)
                }}
                sx={{
                    position: "absolute",
                    left: 12,
                    top: 12,
                    backgroundColor: "white",
                    "&:hover": {
                        backgroundColor: "#f5f5f5",
                    },
                    boxShadow: 1,
                }}
            >
                {fav ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>
        </Card>
    )
}
