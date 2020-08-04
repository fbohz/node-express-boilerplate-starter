const mongoose = require('mongoose');

// user schema

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: [true, 'missing uid'],
    },
    name: String,
    email: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User