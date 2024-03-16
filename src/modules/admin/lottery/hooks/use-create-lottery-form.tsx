import { useState } from "react"
import { useForm } from "react-hook-form"

import {
  createLotterySchema,
  type CreateLotterySchemaType,
} from "@/modules/admin/lottery/schemas/create-lottery-schema"
import handleError from "@/modules/errors/utils/handle-error"
import { zodResolver } from "@hookform/resolvers/zod"

export default function useCreateLotteryForm() {
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

  // TODO: SERVICES

  const onSubmit = async (data: CreateLotterySchemaType) => {
    try {
      console.log(data)
    } catch (error: any) {
      // TODO: Handle error
      console.error("on login submit", error)
      handleError(error, (message) => setErrorMessage(message))
    }
  }

  return {
    ...form,
    handleSubmit: handleSubmit(onSubmit),
    errorMessage,
  }
}
