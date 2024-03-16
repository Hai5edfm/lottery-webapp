//infra
export interface GetLotteriesResponse {
  data: LotteryResponse[]
  count: number
  limit: number
  offset: number
}

export interface LotteryResponse {
  id: string
  lottery_name: string
  slug: string
  description: string
  min_participants: number
  max_participants: any
  public_access: boolean
  secret_code: string
  number_of_winners: number
  finished: boolean
  createdAt: string
  updatedAt: string
  prizes: Prize[]
}

export interface Prize {
  id: string
  lotteryId: string
  position: number
  prize: string
  createdAt: string
  updatedAt: string
}
