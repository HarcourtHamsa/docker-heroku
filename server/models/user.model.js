const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    emailaddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    imageId: {
        type: String,
    }
})

const User = mongoose.model('bankusers', userSchema)

module.exports = User