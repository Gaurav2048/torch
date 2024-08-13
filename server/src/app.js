const express = require('express')
const cors = require('cors')
const errorHandler = require('./utils/errorHandler')
const routerV1 = require('./routes')

const app = express()
app.use(express.json())

app.use(cors())

app.use('/v1', routerV1)

app.use(errorHandler)

module.exports = app;

