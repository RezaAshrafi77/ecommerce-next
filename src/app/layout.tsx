import { ReactNode } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "@/styles/theme"

export const metadata = {
    title: "E-Commerce",
    description: "Product focused e-commerce site",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
