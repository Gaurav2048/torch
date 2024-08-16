const express = require('express')
const auth  = require('../middlewares/auth')
const { getMembers, createMember } = require('../controllers/member.controller')

const router = express.Router()

router.get('/:orgId', getMembers)
router.post('/:orgId', createMember)

module.exports = router;
