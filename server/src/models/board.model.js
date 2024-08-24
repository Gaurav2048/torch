const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    id: String,
    text: String,
    completed: Boolean,
})

const commentSchema = mongoose.Schema({
    id: String,
    text: String,
})

const taskSchema = mongoose.Schema({
    id: String,
    content: String,
    title: String,
    sprintId: String,
    columnId: String,
    createdBy: String,
    assignedTo: String,
    workType: String,
    todos: [todoSchema],
    comments: [commentSchema],
})

const columnSchema = mongoose.Schema({
    id: String,
    title: String,
    taskIds: [String],
})

const boardSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    tasks: {
        type: Map,
        of: taskSchema
    },
    columns: {
        type: Map,
        of: columnSchema
    },
    columnOrder: {
        type: [String]
    },
    members: {
        type: [String]
    },
    creator: {
        type: String
    },
    orgId: {
        type: String
    }
})

const Board = mongoose.model('Board', boardSchema)

module.exports = Board