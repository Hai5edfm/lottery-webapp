import { useForm } from "react-hook-form"

import { loginSchema, type LoginSchemaType } from "@/modules/auth/schemas/login-schema"
import { zodResolver } from "@hookform/resolvers/zod"

export default function useLoginForm() {
  const { handleSubmit, ...form } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data)
  }

  return { ...form, handleSubmit: handleSubmit(onSubmit) }
}
