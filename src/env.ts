import { z } from 'zod'

const nonEmptyString = z
  .string()
  .min(1, { message: 'Set the environment variable' })

const envSchema = z.object({
  PORT: nonEmptyString.transform((val) => Number(val)),
  NODE_ENV: nonEmptyString,
})

export const env = envSchema.parse(process.env)
