const express = require('express')
const flowerModel = require('../models/flowerModel')

const { getAllFlowers, 
        getFlower, 
        createFlower, 
        deleteFlower, 
        updateFlower } = require('../controllers/flowerController')

const router = express.Router()

// GET all the flowers
router.get('/', getAllFlowers)

// GET a single flower
router.get('/:id', getFlower)

// POST a single flower
router.post('/', createFlower)

// DELETE a single flower
router.delete('/:id', deleteFlower)

// UPDATE a single flower
router.patch('/:id', updateFlower)

module.exports = router


