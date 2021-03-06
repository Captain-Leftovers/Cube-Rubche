const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then((hash)=> {
            this.password = hash;
            next()
        })
})

const User = mongoose.model('User', userSchema);

module.exports = User;