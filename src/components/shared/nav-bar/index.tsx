import Image from "next/image"
import Link from "next/link"
import type React from "react"

import logo_img from "@/assets/images/brand_img.png"

interface Props {
  children?: React.ReactNode
}

export const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full items-center justify-between p-6">
      <div className="w-fit">
        <Link href="/">
          <div className="flex items-end p-1">
            <Image src={logo_img} alt="food maps logo" width={60} height={60} />
          </div>
        </Link>
      </div>
      {children}
    </div>
  )
}
