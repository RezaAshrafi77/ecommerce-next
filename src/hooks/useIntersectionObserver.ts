"use client"

import { useEffect, useRef } from "react"

export const useIntersectionObserver = (onIntersect: () => void) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onIntersect()
                }
            },
            { threshold: 1.0 }
        )

        observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [onIntersect])

    return ref
}
