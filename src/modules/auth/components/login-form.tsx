"use client"
import LoginFormSkeleton from "@/modules/auth/components/login-form-skeleton"
import Button from "@/modules/ui/button"
import MakiArrowIcon from "@/modules/ui/icons/maki-arrow-icon"
import Input from "@/modules/ui/input/input"
import PasswordInput from "@/modules/ui/input/password-input"

import useLoginForm from "@/modules/auth/hooks/useLoginForm"

export default function LoginForm() {
  // SETUP FORM
  const {
    register,
    formState: { errors },
    handleSubmit,
    isLoginError,
    isLoginLoading,
    errorMessage,
  } = useLoginForm()

  if (isLoginLoading) return <LoginFormSkeleton />

  return (
    <form className="flex flex-col gap-8 text-[#2792DF]" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Usuario
        </label>
        <Input type="text" id="user" name="user" register={register} />
        <p className="text-[#EF5656]">{errors.user?.message}</p>
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
      {isLoginError && <span className="text-center text-[#EF5656]">{errorMessage}</span>}
    </form>
  )
}
