"use client"
import { useState } from "react"
import Image from "next/image"

import fly_icon from "@/assets/images/fly.png"
import guitar_icon from "@/assets/images/guitar.png"
import lottery_icon from "@/assets/images/lottery_icon.png"
import { NavBar } from "@/modules/ui/components/nav-bar"
import { Search } from "@/modules/ui/components/search-bar/search"
import { Tabs } from "@/modules/ui/components/tabs"
import { TABS } from "@/modules/utils/constants"
import { LOTTERIES } from "@/modules/utils/constants/lottery"

import { LotteryCardsList } from "../modules/ui/components/cards/lottery-cards-list"

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("All")

  return (
    <main className="min-h-screen bg-[#272961]">
      <NavBar />

      <section className="m-auto flex max-w-4xl flex-col items-center justify-center py-10 lg:w-[80%]">
        <Image alt="" src={lottery_icon} width={220} height={220} className="mb-4" />
        <h1 className="mb-14 text-center text-4xl font-bold text-[#29A5FF]">
          Search your lottery by name or ID
        </h1>
        <div className="w-[86%]">
          <Search />

          <div className="mt-44 hidden md:block md:px-10">
            <Tabs tabsArray={TABS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
          <div className="my-10 grid grid-cols-1 gap-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            <LotteryCardsList lotteries={LOTTERIES} />
          </div>
        </div>
      </section>

      <Image
        alt=""
        src={fly_icon}
        width={200}
        height={200}
        className="absolute right-0 top-0 hidden xl:block"
      />
      <Image
        alt=""
        src={guitar_icon}
        width={200}
        height={200}
        className="absolute bottom-0 left-0 hidden xl:block"
      />
    </main>
  )
}
