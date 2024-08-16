const express = require('express')
const boardRouter = require('./board.route')
const authRouter = require('./auth.route')
const orgRouter = require('./org.route')

const router = express.Router()

router.use("/boards", boardRouter)
router.use("/auth", authRouter)
router.use("/org", orgRouter)

module.exports = router;