const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }, 
    password: {
        type: String,
        require: true
    },
    organisation: {
        type: String,
    }
})

userSchema.statics.isEmailTaken = function (email) {
    return this.findOne({ email })
} 

userSchema.methods.isPasswordMatch = function (password) {
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User