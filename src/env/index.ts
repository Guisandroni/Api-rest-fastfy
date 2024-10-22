import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.number().default(3000),
  NODE_ENV: z
    .enum(['Developement', 'testing', 'production'])
    .default('production'),
})

// validação de dados com zod

const errorEnv = envSchema.safeParse(process.env)

if (errorEnv.success === false) {
  console.error('Erro - Variaveis Ambiente Invalidas', errorEnv.error.format())

  throw new Error('Variaveis Ambiente Invalido')
}

export const env = errorEnv.data
