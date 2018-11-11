'use strict'

const Hapi = require('hapi')

const server = Hapi.server({
  port: 8080,
  host: '0.0.0.0'
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Olá, Turma!'
  }
})

server.route({
  method: 'GET',
  path: '/{name}',
  handler: (request, h) => {
    return 'Olá, ' + encodeURIComponent(request.params.name) + '!'
  }
})

const init = async () => {
  await server.start()
  console.log(`Servidor rodando na porta: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
