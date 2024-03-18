import { z } from "zod"

export const joinLotterySchema = z.object({
  user_discord: z
    .string({ required_error: "The user's discord ID is required." })
    .min(2, "The lottery's name is required."),
})

export type JoinLotterySchemaType = z.infer<typeof joinLotterySchema>
