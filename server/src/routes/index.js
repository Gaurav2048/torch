const express = require('express')
const boardRouter = require('./board.route')
const authRouter = require('./auth.route')

const router = express.Router()

router.use("/boards", boardRouter)
router.use("/auth", authRouter)

module.exports = router;