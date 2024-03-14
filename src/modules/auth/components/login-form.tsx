"use client"
import Button from "@/modules/ui/components/button"
import MakiArrowIcon from "@/modules/ui/components/icons/maki-arrow-icon"
import Input from "@/modules/ui/components/input/input"
import PasswordInput from "@/modules/ui/components/input/password-input"

import useLoginForm from "@/modules/auth/hooks/useLoginForm"

export default function LoginForm() {
  // SETUP FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useLoginForm()

  return (
    <form className="flex flex-col gap-8 text-[#2792DF]" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <Input type="email" id="email" name="email" register={register} />
        <p className="text-[#EF5656]">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <PasswordInput id="password" name="password" register={register} />
        <p className="text-[#EF5656]">{errors.password?.message}</p>
      </div>

      <Button className="flex items-center justify-center gap-2">
        Sign in <MakiArrowIcon className="aspect-square w-5" />
      </Button>
    </form>
  )
}
