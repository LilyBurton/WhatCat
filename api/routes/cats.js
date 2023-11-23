const express = require('express')
const Cat = require('../models/catModel')

const router = express.Router()

//GET all cats
router.get('/', (req, res) => {
    res.json({mssg: 'GET all cats'})
})

//GET single cat
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single cat'})
})

//POST a new cat
router.post('/', async (req, res) => {
    const {breed, origin, pattern} = req.body

    try {
        const cat = await Cat.create({breed, origin, pattern})
        res.status(200).json(cat)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

//DELETE a cat
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a cat'})
})

// UPDATE a cat
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a cat'})
})

module.exports = router;