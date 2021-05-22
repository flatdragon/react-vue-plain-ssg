const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const serve = serveStatic('./dist', { 'index': [ 'index.html' ] })

const server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res))
})

server.listen(3000, () => {
  console.log('Serving static at http://localhost:3000...')
})
