var express = require('express')
var router = express.Router()

// Controllers
const { ChatBotController } = require('../controllers/chatbot')

// Rotas
router.post('/init', ChatBotController.init)

module.exports = router