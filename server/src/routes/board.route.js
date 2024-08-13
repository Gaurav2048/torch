const express = require('express')
const auth  = require('../middlewares/auth')
const { getBoards, createBoard } = require('../controllers/board.controller')

const router = express.Router()

router.get('/:orgId', auth, getBoards)
router.post('/:orgId', createBoard)

module.exports = router;
