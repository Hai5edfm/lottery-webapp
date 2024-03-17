"use client"
import { useState } from "react"
import { type NextPage } from "next"
import Image from "next/image"
import { IoAddOutline } from "react-icons/io5"

import fly_icon from "@/assets/images/fly.png"
import guitar_icon from "@/assets/images/guitar.png"
import { useAppDispatch } from "@/modules/redux/redux-hooks"
import { LotteryCardsList } from "@/modules/ui/cards/lottery-cards-list"
import { openModal } from "@/modules/ui/modal/redux/modal-slice"
import { NavBar } from "@/modules/ui/nav-bar"
import { Search } from "@/modules/ui/search-bar/search"
import { Tabs } from "@/modules/ui/tabs"
import { ADMIN_TABS } from "@/modules/utils/constants"

import useLotteries from "@/modules/admin/lottery/hooks/useLotteries"

const LotteriesPage: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState("All")
  const dispatch = useAppDispatch()

  const { lotteries } = useLotteries()

  return (
    <main className="min-h-screen bg-[#272961]">
      <NavBar />

      <section className="m-auto flex max-w-4xl flex-col items-center justify-center py-10 lg:w-[80%]">
        <div className="w-[86%]">
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <Search />
            </div>
            <button
              type="button"
              onClick={() => dispatch(openModal({ type: "new-lottery" }))}
              className="flex w-4/12 items-center rounded-lg bg-[#EF5656] px-4 py-2 font-semibold hover:bg-[#e25959]"
            >
              Add new lottery
              <IoAddOutline size={32} />
            </button>
          </div>

          <div className="mt-24 hidden md:block md:px-2">
            <Tabs
              tabsArray={ADMIN_TABS}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="my-10 grid grid-cols-1 gap-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
            <LotteryCardsList lotteries={lotteries} />
          </div>
        </div>
      </section>

      <Image
        alt=""
        src={fly_icon}
        width={200}
        height={200}
        className="absolute bottom-12 right-0 hidden xl:block"
      />
      <Image
        alt=""
        src={guitar_icon}
        width={200}
        height={200}
        className="absolute left-0 top-80 hidden xl:block"
      />
    </main>
  )
}

export default LotteriesPage
