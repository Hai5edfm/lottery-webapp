"use client"
import { type NextPage } from "next"
import Image from "next/image"
import { MdCelebration } from "react-icons/md"

import lottery_icon from "@/assets/images/lottery_icon.png"
import LotteryResultsCard from "@/modules/admin/lottery/components/lottery-results"
import { WinnersList } from "@/modules/admin/lottery/components/winners-list"
import { type LotteryCardProps } from "@/modules/interfaces"
import { NavBar } from "@/modules/ui/nav-bar"

const LotteryResults: NextPage = () => {
  return (
    <main>
      <NavBar />
      <section className="justify-center gap-28 px-3 sm:px-12 md:px-20 lg:flex xl:px-40">
        <div className="mb-10 lg:w-1/2 lg:max-w-xl">
          <LotteryResultsCard lotteryCard={{} as LotteryCardProps} />
        </div>
        <div className="mb-10 lg:w-1/2 lg:max-w-xl">
          <div className="flex flex-col items-center">
            <Image alt="" src={lottery_icon} width={160} height={160} className="mb-4" />
            <h2 className="flex items-center text-6xl font-semibold text-[#FCBE1E]">
              Winners
              <MdCelebration size={72} className="ml-2" />
            </h2>

            <div className="mt-20 w-3/4">
              <WinnersList />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LotteryResults
