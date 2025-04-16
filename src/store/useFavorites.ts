import { create } from "zustand"
import { Product } from "@/features/products/services/productService"

interface FavoritesState {
    favorites: Product[]
    toggleFavorite: (product: Product) => void
    isFavorite: (id: number) => boolean
}

export const useFavorites = create<FavoritesState>((set, get) => ({
    favorites: [],
    toggleFavorite: (product) => {
        const exists = get().favorites.find((p) => p.id === product.id)
        if (exists) {
            set((state) => ({
                favorites: state.favorites.filter((p) => p.id !== product.id),
            }))
        } else {
            set((state) => ({
                favorites:
                    state.favorites.length < 4
                        ? [...state.favorites, product]
                        : state.favorites,
            }))
        }
    },
    isFavorite: (id) => {
        return get().favorites.some((p) => p.id === id)
    },
}))
