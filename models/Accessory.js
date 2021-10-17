const mongoose = require('mongoose');

accSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validation:[ /^https?/i, 'image Url is invalid']
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    }

})

const Accessory = mongoose.model('Accessory', accSchema);
module.exports = Accessory;