"use client"

import { useEffect, useState } from "react"

import { NewLotteryModal } from "@/modules/admin/lottery/components/new-lottery-modal"

export const ModalProvider = () => {
  // STATE FOR NEXTJS 14 server side hack, portal can be used only in client side
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* AÑADIR NUEVOS MODALES AQUI */}
      <NewLotteryModal />
    </>
  )
}
