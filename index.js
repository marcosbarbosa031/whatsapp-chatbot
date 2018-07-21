const bodyParser = require('body-parser')
const config = require('./config')
const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
const server = require('http').Server(app)

// Configurar Bodyparse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Importar Rotas
fs
  .readdirSync(path.join(__dirname, '/routes'))
  .forEach((file) => {
    app.use(`/${file.slice(0, -3)}`, require(`./routes/${file.slice(0, -3)}`))
  })

server.listen(config.port)
server.setTimeout(500000)
console.log(`Server started on port ${config.port}`)