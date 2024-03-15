import { z } from "zod"

export const loginSchema = z.object({
  user: z
    .string({ required_error: "El username es requerido." })
    .min(1, "El username es requerido."),
  password: z
    .string({ required_error: "El password es requerido." })
    .min(1, "El password es requerido.")
    .min(8, "El password debe tener al menos 8 caracteres."),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
