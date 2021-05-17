// General imports
const path = require('path')

// General variables
const PORT = 3000
const staticFolder = path.join(__dirname, 'files')

// Express REST app imports configuration 
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
// Setting Express static folder
app.use(express.static(staticFolder))
// Express Server routes
const { initializeAppRoutes } = require('./routes.js')
initializeAppRoutes(app, { staticFolder })

// Socket.io imports and configuration
const http = require('http')
const server = http.createServer(app)
const socketIO = require('socket.io')
const io = socketIO(server)
io.on('connection', (client) => {
  console.log('connection made')
  client.on('event', (data) => {
    console.log('event', data)
  })
  client.on('disconnect', () => {
    console.log('disconnect')
  })
})

// Listening
server.listen(PORT, () => {
  console.log(`Simple server is listening at http://localhost:${PORT}`)
})
