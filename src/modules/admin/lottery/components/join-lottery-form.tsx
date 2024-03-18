import Button from "@/modules/ui/button"
import Input from "@/modules/ui/input/input"

import useJoinLotteryForm from "../hooks/use-join-lottery-form"

export default function JoinLotteryForm() {
  // SETUP FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    errorMessage,
  } = useJoinLotteryForm()

  return (
    <form className="flex w-full flex-col gap-5" onSubmit={handleSubmit}>
      {/* USER DISCORD ID */}
      <div className="flex flex-col gap-2">
        <label htmlFor="user_discord" className="font-semibold after:content-['*']">
          Discord user ID
        </label>
        <Input className="border-2 border-[#1E1E1E]" name="user_discord" register={register} />
        <p className="text-[#EF5656]">{errors.user_discord?.message}</p>
      </div>

      <Button>Create lottery</Button>
      <span className="text-center text-[#EF5656]">{errorMessage}</span>
    </form>
  )
}
