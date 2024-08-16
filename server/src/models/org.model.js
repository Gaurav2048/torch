const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const orgSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    sprints: {
        type: [{
            id: String,
            name: String,
            size: Number,
        }]
    },
    workTypes: {
        type: [{
            id: String,
            name: String,
        }]
    }
})


const Org = mongoose.model('Org', orgSchema)

module.exports = Org;
