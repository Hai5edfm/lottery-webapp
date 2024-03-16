"use client"

import Image from "next/image"
import ReactTextareaAutosize from "react-textarea-autosize"

import not_found_icon from "@/assets/images/404.png"
import PrizesList from "@/modules/admin/lottery/components/prizes-list"
import Button from "@/modules/ui/button"
import Input from "@/modules/ui/input/input"
import ToggleSwitch from "@/modules/ui/toggle-switch/toggle-switch"

export default function CreateLotteryForm() {
  return (
    <form className="flex w-full flex-col gap-5">
      {/* LOTTERY NAME */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold after:content-['*']">
          Lottery name
        </label>
        <Input className="border-2 border-[#1E1E1E]" />
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold after:content-['*']">
          Description
        </label>
        <ReactTextareaAutosize
          // placeholder="Description"
          className="max-h-80 min-h-36 w-full resize-none appearance-none rounded-md border-2 border-[#1E1E1E] bg-transparent px-2 py-1 focus:outline-none"
        />
      </div>

      {/* PARTICIPANTS */}
      <div className="grid grid-cols-4 grid-rows-3 gap-3">
        {/* TITLE */}
        <h3 className="col-span-full row-span-1 text-center font-semibold text-[#2792DF]">
          Participants
        </h3>
        {/* MIN MAX */}
        <div className="col-span-full row-span-2 flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="name" className="font-semibold after:content-['*']">
            Min
          </label>
          <Input className="border-2 border-[#1E1E1E]" />
        </div>
        <div className="col-span-full row-span-2 flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="name" className="font-semibold">
            Max <span className="text-xs font-light">(optional)</span>
          </label>
          <Input className="border-2 border-[#1E1E1E]" />
        </div>

        {/* SECRET CODE TOGGLESWITCH */}
        <div className="col-span-full row-span-3 flex flex-col gap-2 sm:col-span-1">
          <ToggleSwitch label="Public Access" />
        </div>

        {/* SECRET CODE */}
        <div className="col-span-full row-span-3 flex flex-col gap-2 sm:col-span-3">
          <label htmlFor="name" className="font-semibold after:content-['*']">
            Secret Code
          </label>
          <Input className="border-2 border-[#1E1E1E]" />
        </div>
      </div>

      {/* PRIZES */}
      <div className="flex flex-col gap-5">
        {/* TITLE */}
        <h3 className="text-center font-semibold text-[#2792DF]">Prizes</h3>

        {/* NUMBER OF WINNER */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold after:content-['*']">
            Number of winners
          </label>
          <Input className="w-full border-2 border-[#1E1E1E] sm:w-1/2" />
        </div>

        {/* PRIZES LIST */}
        <div className="flex w-full flex-col gap-3">
          <h4 className="text-center font-semibold">
            Prizes list <span className="text-xs font-light">(optional)</span>
          </h4>

          {/* ADD PRIZE */}
          <Button type="button" className="ml-auto block bg-[#29A5FF] px-4 text-sm">
            Add prize
          </Button>

          {/* LIST PRIZE */}

          <PrizesList />

          {/* EMPTY LIST */}
          <div className="flex flex-col items-center">
            <div className="relative aspect-[180/161] w-[min(180px,100%)]">
              <Image alt="" src={not_found_icon} fill />
            </div>
            <span className="text-sm font-semibold">No prizes added yet</span>
          </div>
        </div>
      </div>
      <Button>Create lottery</Button>
    </form>
  )
}
