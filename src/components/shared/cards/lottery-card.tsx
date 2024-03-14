import type React from "react"

interface Props {
  name: string
  description: string
  time: string
  participants: number
  onClick: () => void
}

export const LotteryCard: React.FC<Props> = ({
  name,
  description,
  onClick,
  time,
  participants,
}) => {
  return (
    <article className="h-fit w-full max-w-[320px] overflow-hidden rounded-lg bg-white shadow-lg">
      <button onClick={onClick} className="h-full w-full">
        <div className="p-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p>{description}</p>
          <div className="mt-2 flex justify-between">
            <p>{time}</p>
            <p>{participants}</p>
          </div>
        </div>
      </button>
    </article>
  )
}
