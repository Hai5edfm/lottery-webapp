"use client"

import { useState } from "react"

import MdiNoShowIcon from "@/modules/ui/components/icons/mdi-no-show-icon"
import MdiShowIcon from "@/modules/ui/components/icons/mdi-show-icon"
import { cn } from "@/modules/utils/cn"

type PasswordInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  register?: any
}

export default function PasswordInput(props: PasswordInputProps) {
  // STATES
  const [isHidden, setIsHidden] = useState(true)

  // PROPS ADAPT
  const { className, register, name, ...delegated } = props

  return (
    <div className="relative">
      <input
        {...delegated}
        className={cn(
          "w-full rounded-md border border-[#2792DF] bg-transparent px-2 py-1",
          className
        )}
        type={isHidden ? "password" : "text"}
        {...(register ? { ...register(name) } : { name })}
      />
      <button type="button" onClick={() => setIsHidden((prevState) => !prevState)}>
        {isHidden ? (
          <MdiShowIcon className="absolute right-3 top-1/2 aspect-square w-6 -translate-y-1/2 text-[#2792DF]" />
        ) : (
          <MdiNoShowIcon className="absolute right-3 top-1/2 aspect-square w-6 -translate-y-1/2 text-[#2792DF]" />
        )}
      </button>
    </div>
  )
}
