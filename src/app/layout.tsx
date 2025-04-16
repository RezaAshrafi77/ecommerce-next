import { ReactNode } from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/styles/theme"
import { QueryProvider } from "@/libs/queryProvider"

export const metadata = {
    title: "E-Commerce",
    description: "E-commerce site",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <QueryProvider>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>{children}</ThemeProvider>
                    </AppRouterCacheProvider>
                </QueryProvider>
            </body>
        </html>
    )
}
