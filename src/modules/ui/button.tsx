import { cn } from "@/modules/utils/cn"

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...delegated } = props
  return (
    <button
      {...delegated}
      className={cn("rounded-md bg-[#EF5656] py-2 text-[#f9f9f9] font-semibold", className)}
    >
      {children}
    </button>
  )
}
