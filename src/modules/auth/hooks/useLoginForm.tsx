import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

import { loginSchema, type LoginSchemaType } from "@/modules/auth/schemas/login-schema"
import { APP_ADMIN_PATH } from "@/modules/config/app.routes"
import handleError from "@/modules/errors/utils/handle-error"
import { zodResolver } from "@hookform/resolvers/zod"

import { useLoginMutation } from "@/modules/auth/services/rtkq/auth"
export default function useLoginForm() {
  // ROUTER
  const router = useRouter()

  // STATES
  const [errorMessage, setErrorMessage] = useState("")

  // FORM
  const { handleSubmit, ...form } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })

  // SERVICES
  const [loginService, { isLoading: isLoginLoading, isError: isLoginError }] = useLoginMutation()

  const onSubmit = async (credentials: LoginSchemaType) => {
    try {
      const { authenticated } = await loginService(credentials).unwrap()
      if (authenticated === true) router.push(APP_ADMIN_PATH)
      // TODO: Handle if authenticated is false
    } catch (error: any) {
      // TODO: Handle error
      console.error("on login submit", error)
      handleError(error, (message) => setErrorMessage(message))
    }
  }

  return {
    ...form,
    handleSubmit: handleSubmit(onSubmit),
    isLoginLoading,
    isLoginError,
    errorMessage,
  }
}
