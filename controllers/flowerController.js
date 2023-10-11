const flowerModel = require('../models/flowerModel')
const mongoose = require('mongoose')

// get all flower
const getAllFlowers = async (request, response) => {
    const flowers = await flowerModel.find({}).sort({created: -1})
    response.status(200).json(flowers)
}

// get a single flower
const getFlower = async (request, response) => {
    const {id} = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.satus(404).json({error: 'No such flower.'})
    }

    const flower = await flowerModel.findById(id) 

    response.status(200).json(flower)
}

// create a flower
const createFlower = async (request, response) => {
    const {title, category, price, description, rating} = request.body

    // adding document to database
    try {
        const flower = await flowerModel.create({title, category, price, description, rating})
        response.status(200).json(flower)
    } catch (error) {
        response.status(400).json({error: error.message})
        response.satus(404).json({error: 'No such flower.'})
    }
}
 
// delete a flower
const deleteFlower = async (request, response) => {
    const {id} = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.satus(404).json({error: 'No such flower.'})
    }
 
    const flower = await flowerModel.findOneAndDelete({_id: id})

    response.status(200).json(flower)
}

// update a flower
const updateFlower = async (request, response) => {
    const {id} = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.satus(404).json({error: 'No such flower.'})
    }
 
    const flower = await flowerModel.findOneAndUpdate({_id: id}, {...request.body})

    if (!flower) {
        return response.satus(404).json({error: 'No such flower.'})
    }

    response.status(200).json(flower)
}

module.exports = {
    getAllFlowers,
    getFlower,
    createFlower,
    deleteFlower,
    updateFlower
} 

