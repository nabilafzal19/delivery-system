const express = require('express')
const user = require('../model/user')
const _userController = require('../controller/user')
const userRouter = express.Router()

userRouter.post('/add-user', _userController.addUser)

module.exports = userRouter