import { getProductById } from "@/features/products/services/productService"
import { notFound } from "next/navigation"
import { Box, Container, Typography, Grid, Chip, Divider } from "@mui/material"
import Image from "next/image"
import { use } from "react"

type Props = {
    params: { id: string }
}

export const revalidate = 60 // ISR: 60 ثانیه

export default function ProductDetailPage({ params }: Props) {
    const product = use(getProductById(Number(params.id)))
    if (!product) return notFound()

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
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
        </Container>
    )
}
