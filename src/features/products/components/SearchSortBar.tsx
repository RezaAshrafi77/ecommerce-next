import { Box, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material"

interface Props {
    search: string
    sort: "asc" | "desc"
    onSearchChange: (value: string) => void
    onSortChange: (value: "asc" | "desc") => void
}

export default function SearchSortBar({
    search,
    sort,
    onSearchChange,
    onSortChange,
}: Props) {
    return (
        <Box display="flex" gap={2} mb={3} flexWrap="wrap">
            <TextField
                label="Search"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />

            <ToggleButtonGroup
                value={sort}
                exclusive
                onChange={(e, val) => val && onSortChange(val)}
            >
                <ToggleButton value="asc">Oldest</ToggleButton>
                <ToggleButton value="desc">Newest</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}
