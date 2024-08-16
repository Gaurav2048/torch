const Board = require("../models/board.model")
const ApiError = require("../utils/ApiError")
const catchAsync = require("../utils/catchAsync")
const httpsStatus = require('http-status')

const getBoards = catchAsync(async (req, res) => {
    const orgId = req.params.orgId
    const board = await Board.findOne({
        orgId
    })
    if (!board) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Board not found!")
    }
    res.status(httpsStatus.OK).send(board)
})

const createBoard = catchAsync(async (req, res) => {
    const orgId = req.params.orgId
    // TODO: Permission check 
    const boardData = req.body
    boardData.orgId = orgId
    const board = await Board.create(boardData)
    res.status(httpsStatus.CREATED).send(board)
})

const createTask = catchAsync(async (req, res) => {
    const { orgId, boardId } = req.params
    const task = req.body

    const board = await Board.findById(boardId)
    board.tasks[task.id] = task
    board.columns[task.columnId].taskIds.unshift(task.id)
    await board.save()
    res.status(httpsStatus.CREATED).send(board)
})

module.exports = {
    getBoards, 
    createBoard,
    createTask
}