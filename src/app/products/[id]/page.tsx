"use client"
import { useParams } from "next/navigation"
import {
    Box,
    Container,
    Typography,
    Grid,
    Chip,
    Divider,
    IconButton,
    CircularProgress,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { ArrowBack } from "@mui/icons-material"
import { useProduct } from "@/hooks/useProduct"

export default function ProductDetailPage() {
    const { id } = useParams()
    const { data: product, isLoading, isFetching } = useProduct(Number(id))

    if (isLoading || isFetching) {
        return (
            <Box display="flex" justifyContent="center" py={4}>
                <CircularProgress />
            </Box>
        )
    }
    if (product) {
        return (
            <Container
                maxWidth="md"
                sx={{ py: 6, position: "relative", minHeight: "100vh" }}
            >
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={500}
                            height={500}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 8,
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" gutterBottom>
                            {product.title}
                        </Typography>

                        <Typography variant="h6" color="primary" gutterBottom>
                            ${product.price}
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                            {product.description}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Box display="flex" gap={1} flexWrap="wrap">
                            <Chip label={`Brand: ${product.brand}`} />
                            <Chip label={`Category: ${product.category}`} />
                            <Chip label={`Stock: ${product.stock}`} />
                            <Chip label={`Rating: ${product.rating}`} />
                        </Box>
                    </Grid>
                </Grid>
                <Link href="/" passHref>
                    <IconButton
                        size="small"
                        sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            backgroundColor: "white",
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                            },
                            boxShadow: 1,
                        }}
                    >
                        <ArrowBack />
                    </IconButton>
                </Link>
            </Container>
        )
    }
    return null
}
