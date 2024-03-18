"use client"
import Image from "next/image"

import fly_icon from "@/assets/images/fly.png"
import guitar_icon from "@/assets/images/guitar.png"
import lottery_icon from "@/assets/images/lottery_icon.png"
import wink_icon from "@/assets/images/wink.png"
import LotteryList from "@/modules/admin/lottery/components/lottery-list"
import { NavBar } from "@/modules/ui/nav-bar"
import { Search } from "@/modules/ui/search-bar/search"
import { Tabs } from "@/modules/ui/tabs"
import { TABS } from "@/modules/utils/constants"

import useLotteries from "@/modules/admin/lottery/hooks/useLotteries"

export default function Home() {
  const { lotteries, lotteryType } = useLotteries()
  const isEmpty = lotteries?.length <= 0

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
            <Tabs tabsArray={TABS} selectedTab={lotteryType} />
          </div>
          <div
            className={`${isEmpty ? "my-32 flex justify-center" : "my-10 grid grid-cols-1 gap-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3"}`}
          >
            <LotteryList key={lotteryType} />
          </div>
        </div>
      </section>

      <Image
        alt=""
        src={fly_icon}
        width={200}
        height={200}
        className="absolute right-0 top-16 hidden xl:block"
      />
      <Image
        alt=""
        src={guitar_icon}
        width={200}
        height={200}
        className="absolute bottom-0 left-0 hidden xl:block"
      />
      <Image
        alt=""
        src={wink_icon}
        width={240}
        height={240}
        className="absolute -bottom-[50%] right-0 hidden xl:block"
      />
    </main>
  )
}
