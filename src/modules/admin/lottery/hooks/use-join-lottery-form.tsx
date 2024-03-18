import { useState } from "react"
import { useForm } from "react-hook-form"

import handleError from "@/modules/errors/utils/handle-error"
import { useAppDispatch, useAppSelector } from "@/modules/redux/redux-hooks"
import { closeModal } from "@/modules/ui/modal/redux/modal-slice"
import { zodResolver } from "@hookform/resolvers/zod"

import { useJoinLotteryMutation } from "@/modules/admin/lottery/services/rtkq/lottery"

import { type Lottery } from "../interfaces"
import { joinLotterySchema, type JoinLotterySchemaType } from "../schemas/join-lottery-schema"

export default function useJoinLotteryForm() {
  // STORE DISPATCHER
  const dispatch = useAppDispatch()
  const lottery: Lottery = useAppSelector((state) => state.modal.data)
  // STATES
  const [errorMessage, setErrorMessage] = useState("")

  // FORM
  const { handleSubmit, ...form } = useForm<JoinLotterySchemaType>({
    resolver: zodResolver(joinLotterySchema),
    defaultValues: {},
  })

  // SERVICES
  const [joinLotteryService, { isError: isErrorJoiningLottery, isLoading: isJoiningLottery }] =
    useJoinLotteryMutation()

  const onSubmit = async (data: JoinLotterySchemaType) => {
    try {
      console.log("join lottery", data, lottery.id)
      const response = await joinLotteryService({
        body: {
          user_discord: data.user_discord,
        },
        lottery_id: lottery.id,
      }).unwrap()

      console.log("join lottery", response)
      dispatch(closeModal())
    } catch (error: any) {
      console.error("on join lottery submit", error)
      handleError(error, (message) => setErrorMessage(message))
    }
  }

  return {
    ...form,
    handleSubmit: handleSubmit(onSubmit),
    errorMessage,
    isError: isErrorJoiningLottery,
    isCreatingLottery: isJoiningLottery,
  }
}
