const Board = require("../models/board.model")
const Org = require("../models/org.model")
const ApiError = require("../utils/ApiError")
const catchAsync = require("../utils/catchAsync")
const httpsStatus = require('http-status')

const getBoards = catchAsync(async (req, res) => {
    const { orgId, id } = req.params
    const board = await Board.findOne({
        orgId,
        _id: id
    })
    if (!board) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Board not found!")
    }
    res.status(httpsStatus.OK).send(board)
})

const createBoard = catchAsync(async (req, res) => {
    const orgId = req.params.orgId
    const org = await Org.findById(orgId)
    if (!org) {
        throw new ApiError(httpsStatus.INTERNAL_SERVER_ERROR, "Something went wrong!")
    }
    // TODO: Permission check 
    const boardData = req.body
    boardData.orgId = orgId
    const board = await Board.create(boardData)
    if (!board) {
        throw new ApiError(httpsStatus.INTERNAL_SERVER_ERROR, "Something went wrong!")
    }
    // add board to org 
    
    org.boards.push({
        _id: board._id,
        name: board.name
    })
    await org.save()

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