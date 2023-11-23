const mongoose = require('mongoose')

const Schema = mongoose.Schema

const catSchema = new Schema ({
    breed: {
        type: String,
        required: true
    },

    origin: {
        type: String,
        required: true
    },

    pattern: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Cat', catSchema)