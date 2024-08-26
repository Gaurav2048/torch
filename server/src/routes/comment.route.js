const express = require('express')
const { getComments, createComment, replyToComment } = require('../controllers/comment.controller')

const router = express.Router()

router.get('/:orgId/:boardId/:taskId', getComments)
router.post('/:orgId/:boardId/:taskId', createComment)
router.post('/:orgId/:boardId/:taskId/reply', replyToComment)

module.exports = router;
