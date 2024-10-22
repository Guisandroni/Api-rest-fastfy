import { knex } from 'knex'
import 'dotenv/config'
import { env } from './env'

// console.log(process.env)

// ₢onfig da variavel ambient.env
export const confingKnex = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const dataKnex = knex(confingKnex)
