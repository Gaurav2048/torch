const express = require('express')
const auth  = require('../middlewares/auth')
const { getBoards, createBoard } = require('../controllers/board.controller')

const router = express.Router()

router.get('/', auth, getBoards)
router.post('/', auth, createBoard)

module.exports = router;
