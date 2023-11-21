const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new cat'})
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