// TODO: Refactor, deuda tecnica
export default function handleError(error: any, callback: (errMsg: string) => void) {
  // handle error if message is in errorObject
  if (typeof error === "object" && "message" in error) {
    const { message } = error
    if (typeof message === "string") return callback(message)
    if (Array.isArray(message) && message.length > 0) {
      return callback(message.toString())
    }
  }

  // handle error if data is in errorObject and message inside data
  if (typeof error === "object" && "data" in error) {
    const { data } = error
    if (typeof data === "object" && "message" in data) {
      const { message } = data
      if (typeof message === "string") return callback(message)
      if (Array.isArray(message) && message.length > 0) {
        return callback(message.toString())
      }
    }
  }

  // error not handled
  return "Ups!, algo salió mal"
}
