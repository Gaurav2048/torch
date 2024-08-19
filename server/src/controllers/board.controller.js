const Board = require("../models/board.model")
const Org = require("../models/org.model")
const User = require("../models/user.model")
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
    if (board.orgId !== orgId) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Board not found")
    }
    board.tasks.set(task.id, task) 
    board.columns.get(task.columnId).taskIds.unshift(task.id)
    await board.save()
    res.status(httpsStatus.CREATED).send(board)
})

const createBoardMember = catchAsync(async (req, res) => {
    const { memberId, boardId } = req.body
    const orgId = req.params.orgId

    const board = await Board.findById(boardId)
    if (!board) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Project not found!")
    }
    if (board.orgId !== orgId) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Project does not belongs to the organisation!")
    }
    const member = await User.findById(memberId)
    if (!member) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Member not found!")
    }
    if (member.organisation !== orgId) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Member does not belongs to the Organisation!")
    }

    const isMemberExists = board.members.includes(memberId)
    if (isMemberExists) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Member already added to board!")
    }
    board.members.push(memberId)
    await board.save()
    member.boards.push(boardId)
    await member.save()
    res.status(httpsStatus.OK).send({
        message: "Member created for the project",
        board
    })
})

const removeBoardMember = catchAsync(async (req, res) => {
    const { memberId, boardId } = req.body
    const orgId = req.params.orgId

    const board = await Board.findById(boardId)
    if (!board) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Project not found!")
    }
    if (board.orgId !== orgId) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Project does not belongs to the organisation!")
    }
    const member = await User.findById(memberId)
    if (!member) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Member not found!")
    }
    if (member.organisation !== orgId) {
        throw new ApiError(httpsStatus.BAD_REQUEST, "Member does not belongs to the Organisation!")
    }

    board.members = board.members.filter(m =>  m !== memberId)
    await board.save()
    member.boards = member.boards.filter(b => b !== boardId)
    await member.save()
    res.status(httpsStatus.OK).send({
        message: "Member created for the project",
        board
    })
})

module.exports = {
    getBoards, 
    createBoard,
    createTask,
    createBoardMember,
    removeBoardMember
}