import { useState } from "react"
import { useForm } from "react-hook-form"

import { type PrizeDTO } from "@/modules/admin/lottery/interfaces"
import {
  createLotterySchema,
  type CreateLotterySchemaType,
} from "@/modules/admin/lottery/schemas/create-lottery-schema"
import handleError from "@/modules/errors/utils/handle-error"
import { useAppDispatch } from "@/modules/redux/redux-hooks"
import { closeModal } from "@/modules/ui/modal/redux/modal-slice"
import { zodResolver } from "@hookform/resolvers/zod"

import { useCreateLotteryMutation } from "@/modules/admin/lottery/services/rtkq/lottery"

export default function useCreateLotteryForm() {
  // STORE DISPATCHER
  const dispatch = useAppDispatch()

  // STATES
  const [errorMessage, setErrorMessage] = useState("")

  // FORM
  const { handleSubmit, ...form } = useForm<CreateLotterySchemaType>({
    resolver: zodResolver(createLotterySchema),
    defaultValues: {
      name: "",
      description: "",
      min: 0,
      max: 0,
      isPublicAccess: true,
      secretCode: "",
      numberOfWinners: 1,
      prizesList: [],
    },
  })

  // SERVICES
  const [createLotteryService, { isError: isErrorCreatingLottery, isLoading: isCreatingLottery }] =
    useCreateLotteryMutation()

  const onSubmit = async (data: CreateLotterySchemaType) => {
    try {
      // REFACTOR: ADAPTER
      const prizes: PrizeDTO[] = data.prizesList.map((prize, index) => {
        return { position: index + 1, prize: prize.name }
      })

      const response = await createLotteryService({
        description: data.description,
        lottery_name: data.name,
        min_participants: data.min,
        number_of_winners: data.numberOfWinners,
        public_access: data.isPublicAccess,
        participants: [],
        prizes,
        secret_code: data.secretCode ?? "",
      }).unwrap()

      console.log("create lottery", response)
      dispatch(closeModal())
    } catch (error: any) {
      console.error("on create lottery submit", error)
      handleError(error, (message) => setErrorMessage(message))
    }
  }

  return {
    ...form,
    handleSubmit: handleSubmit(onSubmit),
    errorMessage,
    isError: isErrorCreatingLottery,
    isCreatingLottery,
  }
}
