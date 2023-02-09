const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favoryFilm: [{
        type: String,
    }],
    favory: [{
        type: String,
    }],
    role: {
        type: String,
        default: 'Normal',
        required: true
    }
})


const User = mongoose.model('User', userSchema)

module.exports = User