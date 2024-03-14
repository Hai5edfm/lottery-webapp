export interface LotteryCardProps {
  name: string
  description: string
  time: string
  participants: {
    current: number
    max: number
  }
  onClick: () => void
}
