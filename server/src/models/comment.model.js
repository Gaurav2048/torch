const mongoose = require('mongoose')

const reactionSchema = mongoose.Schema({
    reactedBy: String,
    reaction: {
        type: String,
        enum: [ 'SMILE', 'THUMBS_UP', 'THUMBS_DOWN', 'CLAPS', 'THANKS' ]
    }
})

const commentSchema = mongoose.Schema({
    commenterId: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    taskId: {
        type: String,
        require: true
    },
    reactions: [reactionSchema],
    replies: [{
        reply: String,
        replierId: String,
        reactions: [reactionSchema],
        createdAt: {
            type : Date, 
            default: Date.now
        }
    }]
}, {
    timestamps: { createdAt: true, updatedAt: false }
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment;

