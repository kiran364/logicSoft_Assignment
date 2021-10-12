const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    ISBN : {
        type: String,
        require: true
    },
    bookName: {
        type: String
    },
    Author: {
        type: String
    },
    Publisher: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Books', bookSchema);