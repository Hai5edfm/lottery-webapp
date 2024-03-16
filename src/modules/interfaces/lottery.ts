export interface LotteryCardProps {
  name: string
  description: string
  time: number
  participants: {
    current: number
    max: number
  }
  onClick: () => void
}
