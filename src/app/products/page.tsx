import ProductListPage from "@/features/products/components/ProductListPage"

export const revalidate = 60 // ISR: صفحه هر ۶۰ ثانیه آپدیت بشه

export default function ProductsPage() {
    return <ProductListPage />
}
