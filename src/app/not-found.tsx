"use client"
import { useEffect } from "react"
import Image from "next/image"

import not_found_icon from "@/assets/images/404.png"

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found"
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12">
      <Image alt="" src={not_found_icon} width={320} height={320} />
      <h1 className="text-4xl font-bold text-[#29A5FF]">404 error - Page Not Found</h1>

      <a href="/" className="rounded-md bg-[#9013FE] px-4 py-2 text-lg text-white">
        Go back to Home
      </a>
    </main>
  )
}

export default NotFound
