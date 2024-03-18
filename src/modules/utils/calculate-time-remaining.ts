/**
 * Calculates the time remaining between two given dates and returns a formatted string.
 * @param {Date} inicio - The start date.
 * @param {Date} fin - The end date.
 * @returns {string} A formatted string representing the time remaining in the format "Xh Ym Zs" or "0".
 */
export const calculateTimeRemaining = (inicio: Date, fin: Date): string => {
  const diferencia = fin.getTime() - inicio.getTime()

  if (diferencia <= 0) {
    return "0H 0M 0S"
  }

  const segundosEnMilisegundos = 1000
  const minutosEnMilisegundos = 60 * segundosEnMilisegundos
  const horasEnMilisegundos = 60 * minutosEnMilisegundos

  const horas = Math.floor(diferencia / horasEnMilisegundos)
  const minutos = Math.floor((diferencia % horasEnMilisegundos) / minutosEnMilisegundos)
  const segundos = Math.floor((diferencia % minutosEnMilisegundos) / segundosEnMilisegundos)

  let tiempoRestante = ""
  if (horas > 0) {
    tiempoRestante += `${horas}H `
  }

  if (minutos > 0 || horas > 0) {
    tiempoRestante += `${minutos}M `
  }

  tiempoRestante += `${segundos}S`

  // Return a string like "5M 0S"
  return tiempoRestante
}

/**
 * Calculates the difference in seconds between the current time and the provided date string.
 * @param {string} dateString - The date string in UTC format (e.g., "2024-03-16T14:17:53Z").
 * @returns {number} The difference in seconds between the current time and the provided date.
 */
export const calculateSecondsFromTodayToDate = (dateString: string) => {
  // Convert the string to a Date object
  const targetDate = new Date(dateString)

  // Get the current time in milliseconds
  const currentTime = new Date().getTime()

  // Calculate the difference in seconds
  const secondsDifference = (targetDate.getTime() - currentTime) / 1000

  return secondsDifference
}
