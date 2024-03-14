import { cn } from "@/modules/utils/cn"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { register?: any } // register for react hook form

export default function Input(props: InputProps) {
  const { className, register, name, ...delegated } = props
  return (
    <input
      {...delegated}
      className={cn(
        "w-full rounded-md border border-[#2792DF] bg-transparent px-2 py-1",
        className
      )}
      {...(register ? { ...register(name) } : { name })}
    />
  )
}
