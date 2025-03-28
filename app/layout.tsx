import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethereum Venezuela",
  description: "Comunidad de Ethereum en Venezuela",
  icons: [
    {
      url: '/favicon.png',
      rel: 'icon',
      type: 'image/x-icon',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'