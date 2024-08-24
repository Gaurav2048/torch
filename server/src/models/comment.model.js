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
    reactions: [reactionSchema],
    replies: [{
        reply: String,
        replierId: String,
        reactions: [reactionSchema]
    }]
})
