import fastify from 'fastify'
import routes from './routes'

const server = fastify()

// Rotas do server
server.register(routes)

export default server
