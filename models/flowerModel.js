const mongoose = require('mongoose')

// creating a schema
const Schema = mongoose.Schema

// structure 
const flowerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model('Flower', flowerSchema)