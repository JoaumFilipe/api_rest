import server from './server/server'
import { env } from './env'

server.listen({ port: env.PORT || 3333, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
