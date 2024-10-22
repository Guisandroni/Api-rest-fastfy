import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import { env } from './env'

const server = fastify()

server.register(transactionsRoutes, {
  prefix: 'dev',
})

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('server running')
  })
