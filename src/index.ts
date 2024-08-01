import server from './server/server'

// port: process.env.PORT ?? 3333
server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})
