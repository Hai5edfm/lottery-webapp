import { useRef } from "react"
import { Controller } from "react-hook-form"
import ReactTextareaAutosize from "react-textarea-autosize"

import PrizesList from "@/modules/admin/lottery/components/prizes-list"
import Button from "@/modules/ui/button"
import Input from "@/modules/ui/input/input"
import ToggleSwitch from "@/modules/ui/toggle-switch/toggle-switch"
import { cn } from "@/modules/utils/cn"

import useCreateLotteryForm from "@/modules/admin/lottery/hooks/use-create-lottery-form"

export default function CreateLotteryForm() {
  // SETUP FORM
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    errorMessage,
    setValue,
    watch,
  } = useCreateLotteryForm()

  // setup hack textarea for RHF (React Hook Form)
  const _descriptionRef = useRef<HTMLTextAreaElement | null>(null)
  const { ref: descriptionRef, ...restDescriptionRegister } = register("description")

  // watched form fields states
  const watchedIsPublicAccess = watch("isPublicAccess")

  return (
    <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
      {/* LOTTERY NAME */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold after:content-['*']">
          Lottery name
        </label>
        <Input className="border-2 border-[#1E1E1E]" name="name" register={register} />
        <p className="text-[#EF5656]">{errors.name?.message}</p>
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold after:content-['*']">
          Description
        </label>
        <ReactTextareaAutosize
          // placeholder="Description"
          ref={(e) => {
            descriptionRef(e)
            _descriptionRef.current = e
          }}
          {...restDescriptionRegister}
          className="max-h-80 min-h-36 w-full resize-none appearance-none rounded-md border-2 border-[#1E1E1E] bg-transparent px-2 py-1 focus:outline-none"
        />
        <p className="text-[#EF5656]">{errors.description?.message}</p>
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
          <Input className="border-2 border-[#1E1E1E]" name="min" register={register} />
          <p className="text-[#EF5656]">{errors.min?.message}</p>
        </div>
        <div className="col-span-full row-span-2 flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="name" className="font-semibold">
            Max <span className="text-xs font-light">(optional)</span>
          </label>
          <Input className="border-2 border-[#1E1E1E]" name="max" register={register} />
          <p className="text-[#EF5656]">{errors.max?.message}</p>
        </div>

        {/* SECRET CODE TOGGLESWITCH */}
        <Controller
          control={control}
          name="isPublicAccess"
          render={({ formState, field }) => {
            const error = formState.errors.isPublicAccess?.message as string
            return (
              <div className="col-span-full row-span-3 flex flex-col gap-2 sm:col-span-1">
                <ToggleSwitch
                  checked={field.value}
                  onChange={field.onChange}
                  label="Public Access"
                />
                <p className="text-[#EF5656]">{error}</p>
              </div>
            )
          }}
        />

        {/* SECRET CODE */}
        <div className="col-span-full row-span-3 flex flex-col gap-2 sm:col-span-3">
          <label
            htmlFor="name"
            className={cn(
              "font-semibold after:content-['*'] transition-opacity ease-in-out duration-75 opacity-100",
              { "opacity-0": watchedIsPublicAccess }
            )}
          >
            Secret Code
          </label>
          <Input
            className={cn(
              "transition-opacity ease-in-out duration-75 opacity-100 border-2 border-[#1E1E1E]",
              { "opacity-0": watchedIsPublicAccess }
            )}
            name="secretCode"
            register={register}
          />
          <p className="text-[#EF5656]">{errors.secretCode?.message}</p>
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
          <Input
            className="w-full border-2 border-[#1E1E1E] sm:w-1/2"
            name="numberOfWinners"
            register={register}
          />
          <p className="text-[#EF5656]">{errors.numberOfWinners?.message}</p>
        </div>

        {/* PRIZES LIST */}
        <PrizesList register={register} errors={errors} control={control} setValue={setValue} />
      </div>
      <Button>Create lottery</Button>
      <span className="text-center text-[#EF5656]">{errorMessage}</span>
    </form>
  )
}
