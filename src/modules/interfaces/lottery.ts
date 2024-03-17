export interface LotteryCardProps {
  name: string
  description: string
  time: number
  public_access: boolean
  secret_code?: string
  participants: {
    current: number
    max: number
  }
  onClick: () => void
}
