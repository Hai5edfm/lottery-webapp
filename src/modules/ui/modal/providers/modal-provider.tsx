"use client"

import { useEffect, useState } from "react"

import { LotteryDetailModal } from "@/modules/admin/lottery/components/modals/lottery-detail-modal"
import { NewLotteryModal } from "@/modules/admin/lottery/components/modals/new-lottery-modal"

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
      <LotteryDetailModal />
    </>
  )
}
