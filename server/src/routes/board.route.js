const express = require('express')
const auth  = require('../middlewares/auth')
const { getBoards, createBoard, createTask, createBoardMember, removeBoardMember } = require('../controllers/board.controller')

const router = express.Router()

router.get('/:orgId/board/:id', getBoards)
// admin only
router.post('/:orgId', createBoard)
// admin only
router.post('/task/:orgId/:boardId', createTask)
// admin only
router.post('/:orgId/member', createBoardMember)
// admin only 
router.put('/:orgId/member', removeBoardMember)

module.exports = router;
