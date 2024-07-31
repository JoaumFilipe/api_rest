import fastify from 'fastify'

const server = fastify()

//rotas gets
server.get('/', () => {
  return 'hello world!'
})

export default server
