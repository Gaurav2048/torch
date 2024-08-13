const Board = require("../models/board.model")
const catchAsync = require("../utils/catchAsync")
const httpsStatus = require('http-status')

const getBoards = catchAsync(async (req, res) => {
    
})

const createBoard = catchAsync(async (req, res) => {
    const orgId = req.params.orgId
    // TODO: Permission check 
    const boardData = req.body
    boardData.orgId = orgId
    const board = await Board.create(boardData)
    res.status(httpsStatus.CREATED).send(board)
})

module.exports = {
    getBoards, 
    createBoard
}