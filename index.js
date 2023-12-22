const express = require('express')
const { dbConnection } = require('./config/db')
const cardRouter = require('./routes/card')
const userRouter = require('./routes/user')


const app = express()
const PORT = process.env.PORT || 3011
const apiPrefix = '/api/v1'

dbConnection()
app.use(express.json())
app.use(apiPrefix + '/card', cardRouter)
app.use(apiPrefix + '/user', userRouter)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})