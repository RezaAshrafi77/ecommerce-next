import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
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
            component={Link}
            href={`/products/${product.id}`}
            sx={{ textDecoration: "none" }}
        >
            <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt={product.title}
            />
            <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    startIcon={
                        fav ? (
                            <FavoriteIcon color="error" />
                        ) : (
                            <FavoriteBorderIcon />
                        )
                    }
                    onClick={() => toggleFavorite(product)}
                >
                    {fav ? "Remove" : "Add to Favorites"}
                </Button>
            </CardActions>
        </Card>
    )
}
