'use client'

import { useEffect, useState } from 'react'

export const Spotlight = ({ className = '' }: { className?: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <div
                style={{
                    transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
                }}
                className={`absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-[100px] ${className}`}
            >
                <div
                    className="absolute inset-0 bg-gradient-conic from-secondary/30 via-accent/20 to-transparent rounded-full blur-[80px]"
                />
            </div>
            <div
                style={{
                    transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
                }}
                className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-[100px] ${className}`}
            >
                <div
                    className="absolute inset-0 bg-gradient-conic from-secondary/30 via-accent/20 to-transparent rounded-full blur-[80px]"
                />
            </div>
        </>
    )
}
