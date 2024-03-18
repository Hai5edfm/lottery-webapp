import { z } from "zod"

export const prizeListItemSchema = z.object({
  name: z.string({ required_error: "The name is required." }).min(1, "The name is required."),
  prizeId: z.string(),
})

export const createLotterySchema = z
  .object({
    name: z
      .string({ required_error: "The lottery's name is required." })
      .min(1, "The lottery's name is required."),
    description: z
      .string({ required_error: "The description is required." })
      .min(1, "The description is required."),
    min: z.coerce
      .number({
        required_error: "The minimum value is required.",
        invalid_type_error: "The minimum value must be a valid number.",
      })
      .int("Only integer number is valid.")
      .gte(0, "The minimum value is 0."),
    max: z.coerce
      .number({
        required_error: "The maximum value is required.",
        invalid_type_error: "The maximum value must be a valid number.",
      })
      .int("Only integer number is valid.")
      .optional(),
    isPublicAccess: z.boolean({
      required_error: "The public access value is required.",
      invalid_type_error: "The public access value must be a boolean.",
    }),
    secretCode: z.string({ required_error: "The secret code is required." }).optional(),
    prizesList: z.array(prizeListItemSchema),
    end_date: z.string({ required_error: "The end date is required." }),
  })
  .refine(
    (data) => {
      if (data.isPublicAccess) {
        return true
      }
      return data.secretCode !== "" // Return true if secretCode is required
    },
    {
      message: "The secret code is required.",
      path: ["secretCode"],
    }
  )
  .refine(
    (data) => {
      if (data.max === 0) return true
      if (data.max) {
        return data.max >= data.min
      }
    },
    {
      message: "The max value should be equal or greater than min value.",
      path: ["max"],
    }
  )

export type CreateLotterySchemaType = z.infer<typeof createLotterySchema>
export type PrizeListItem = z.infer<typeof prizeListItemSchema>
