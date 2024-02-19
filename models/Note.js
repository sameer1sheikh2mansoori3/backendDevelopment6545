const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Subject is required"]
    },
    body: {
        type: String,
        required: [true, "Subject is required"]
    }
})

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;