const express = require('express')
const auth  = require('../middlewares/auth')
const { getBoards, createBoard, createTask } = require('../controllers/board.controller')

const router = express.Router()

router.get('/:orgId/board/:id', getBoards)
router.post('/:orgId', createBoard)
router.post('/task/:orgId/:boardId', createTask)

module.exports = router;
