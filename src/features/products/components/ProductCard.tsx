import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material"
import { Product } from "../services/productService"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card>
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
                <Button size="small" startIcon={<FavoriteBorderIcon />}>
                    Add to Favorites
                </Button>
            </CardActions>
        </Card>
    )
}
