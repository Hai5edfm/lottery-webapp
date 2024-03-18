export interface QueryLotteriesPaginationProps {
  pagination: LotteriesPaginationProps
}

export interface LotteriesPaginationProps {
  limit?: number
  offset?: number
  type?: LotteriesType
}

export enum LotteriesType {
  PUBLIC = "public",
  PRIVATE = "private",
  ALL = "all",
}

export function parseLotteriesPaginationObject(pagination: LotteriesPaginationProps) {
  const queryParams = []

  if (pagination.limit !== undefined) {
    queryParams.push(`limit=${pagination.limit}`)
  }

  if (pagination.offset !== undefined) {
    queryParams.push(`offset=${pagination.offset}`)
  }

  if (pagination.type !== undefined) {
    queryParams.push(`type=${pagination.type}`)
  }

  const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : ""

  return queryString
}
