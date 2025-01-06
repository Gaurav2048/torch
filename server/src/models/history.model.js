import mongoose from "mongoose";

const historySchema = mongoose.Schema({
    for: {
        type: String,
        enum: [ 'NEW_USER_SIGN_UP', 'TASK_ASSIGNED', 'COMMENT_ADDED_ON_TICKET', 'REPLIED_ON_A_COMMENT'  ],
        require: true
    },
    says: {
        type: String,
        require: true
    },
    commentId: {
        type: String,
    },
    concerns: [String],
    visitedBy: [String],
}, {
    timestamps: { createdAt: true, updatedAt: false },
})

const History = mongoose.Schema('history', historySchema)

export default History;