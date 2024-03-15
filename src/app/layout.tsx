import type { Metadata } from "next"
import { Inter } from "next/font/google"

import StoreProvider from "@/modules/redux/store-provider"
import { ModalProvider } from "@/modules/ui/modal/providers/modal-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lottery App",
  description: "A simple lottery app built with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ModalProvider />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
