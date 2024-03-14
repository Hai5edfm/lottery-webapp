import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string({ required_error: "El email es requerido." })
    .email("Email invalido")
    .min(1, "El email es requerido."),
  password: z
    .string({ required_error: "El password es requerido." })
    .min(1, "El password es requerido.")
    .min(6, "El password debe tener al menos 6 caracteres."),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
