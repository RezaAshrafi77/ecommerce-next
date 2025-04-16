import { Box, Pagination } from "@mui/material"

interface Props {
    page: number
    total: number
    limit: number
    onPageChange: (page: number) => void
}

export default function PaginationBar({
    page,
    total,
    limit,
    onPageChange,
}: Props) {
    const pageCount = Math.ceil(total / limit)
    return (
        <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
                count={pageCount}
                page={page}
                onChange={(e, value) => onPageChange(value)}
                color="primary"
            />
        </Box>
    )
}
