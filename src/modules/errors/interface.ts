export interface NestJSError {
  status: number
  data: ErrorData
}

export interface ErrorData {
  message: string[]
  error: string
  statusCode: number
}
