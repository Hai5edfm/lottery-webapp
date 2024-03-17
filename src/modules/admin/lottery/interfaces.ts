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

export interface CreateLotteryDTO {
  lottery_name: string
  description: string
  min_participants: number
  public_access: boolean
  secret_code: string
  number_of_winners: number
  participants: any[]
  prizes: PrizeDTO[]
}

export interface PrizeDTO {
  position: number
  prize: string
}

export interface CreateLotteryResponse {
  id: string
  finished: boolean
  lottery_name: string
  description: string
  min_participants: number
  public_access: boolean
  secret_code: string
  number_of_winners: number
  prizes: Prize[]
  updatedAt: string
  createdAt: string
  slug: string
  max_participants: any
}

// DOMAIN
