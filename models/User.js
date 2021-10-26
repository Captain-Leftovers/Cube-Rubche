const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [2, 'Username cannot be with less than 2 characters'],
    },

    password: {
        type: String,
        required: true,
    }
    
})

const User = mongoose.model('User', userSchema);

module.exports = User;