const express = require('express')
const {
    createCat,
    getCats,
    getCat,
    deleteCat,
    updateCat
} = require('../controller/catController')

const router = express.Router()

//GET all cats
router.get('/', getCats)

//GET single cat
router.get('/:id', getCat)

//POST a new cat
router.post('/', createCat)

//DELETE a cat
router.delete('/:id', deleteCat)

// UPDATE a cat
router.patch('/:id', updateCat)

module.exports = router;