import { useEffect, useRef, useState } from "react"

import { calculateTimeRemaining } from "@/modules/utils/calculate-time-remaining"

const useCountDown = (countdownSeconds: number) => {
  const intervalRef = useRef<NodeJS.Timeout>()
  const startTime = useRef<Date>(new Date()) // This will store the start time when the countdown begins
  const [remainingTime, setRemainingTime] = useState("0")

  useEffect(() => {
    // Clear any previous intervals before starting a new countdown
    clearInterval(intervalRef.current)

    // Update the start time to the current time
    startTime.current = new Date()

    const countDownID = setInterval(() => {
      const expirationTime = new Date(startTime.current.getTime() + countdownSeconds * 1000)
      const counter = calculateTimeRemaining(new Date(), expirationTime) // Use the current time instead of start time

      if (counter === "0") {
        clearInterval(countDownID)
        return
      }
      setRemainingTime(counter)
    }, 1000)

    intervalRef.current = countDownID

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [countdownSeconds])

  return remainingTime
}

export default useCountDown
