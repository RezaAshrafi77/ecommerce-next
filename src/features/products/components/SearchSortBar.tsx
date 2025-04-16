import { debounce } from "@/utils/debounce"
import { Box, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material"

interface Props {
    search: string
    sort: "asc" | "desc"
    onSearchChange: (value: string) => void
    onSortChange: (value: "asc" | "desc") => void
}

export default function SearchSortBar({
    sort,
    onSearchChange,
    onSortChange,
}: Props) {
    return (
        <Box display="flex" gap={2} mb={3} flexWrap="wrap">
            <TextField
                label="Search"
                fullWidth
                size="small"
                onChange={debounce((e) => onSearchChange(e.target.value), 300)}
            />
            <ToggleButtonGroup
                value={sort}
                exclusive
                onChange={(e, val) => val && onSortChange(val)}
            >
                <ToggleButton size="small" value="asc">
                    Oldest
                </ToggleButton>
                <ToggleButton size="small" value="desc">
                    Newest
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}
