const express = require('express')
const _controller = require('../controller/card')
const cardRouter = express.Router()

cardRouter.get('/status', _controller.getCardStatus)

module.exports = cardRouter