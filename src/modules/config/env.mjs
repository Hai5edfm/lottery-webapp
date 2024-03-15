// Note that it’s important your file is JavaScript and not TypeScript, because next.config.js does not get transpiled. If you attempt to import a TypeScript file here then you’ll get a nasty build error.
import zod from "zod"

const envSchema = zod.object({
  NEXT_PUBLIC_API_URL: zod.string().min(1),
})

export const env = envSchema.parse(process.env)
