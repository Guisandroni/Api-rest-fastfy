import { FastifyInstance } from 'fastify'
import { dataKnex } from '../database'

export async function transactionsRoutes(server: FastifyInstance) {
  server.get('/', async () => {
    // const test = dataKnex(' sqlite_schema').select('*')
    const table = await dataKnex('transactions').select('*')
    //   .insert({
    //     id: crypto.randomUUID(),
    //     title: 'User-Transaction',
    //     amount: 1000,
    //   })
    return table
  })
}
