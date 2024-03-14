import Image from "next/image"

import lottery_icon from "@/assets/images/lottery_icon.png"

import { NavBar } from "@/components/shared/nav-bar"
import { Search } from "@/components/shared/search-bar/search"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#272961]">
      <NavBar />

      <section className="m-auto flex w-[80%] max-w-4xl flex-col items-center justify-center">
        <div className="mb-4">
          <Image alt="" src={lottery_icon} width={220} height={220} />
        </div>
        <Search />
      </section>
    </main>
  )
}
