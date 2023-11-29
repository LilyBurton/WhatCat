const Cat = require('../models/catModel')
const mongoose = require('mongoose')

//Get all cats
const getCats = async (req, res) => {
    const cats = await Cat.find({}).sort({createdAt: -1})

    res.status(200).json(cats)
}

//Get a single cat
const getCat = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Nyan such cat"})
    }

    const singleCat = await Cat.findById(id)

    if (!singleCat) {
        return res.status(404).json({error: 'Nyan such cat'})
    }

    res.status(200).json(singleCat)
}

//Create a new cat
const createCat = async (req, res) => {
    const {breed, origin, pattern} = req.body

// add doc to db
    try {
        const cat = await Cat.create({breed, origin, pattern})
        res.status(200).json(cat)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}

// Delete a cat
const deleteCat = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Nyan such cat"})
    }

    const cat = await Cat.findOneAndDelete({_id: id})

    if (!cat) {
        return res.status(404).json({error: 'Nyan such cat'})
    }

    res.status(200).json(cat)
}

// Update a cat
const updateCat = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Nyan such cat"})
    }

    const cat = await Cat.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!cat) {
        return res.status(404).json({error: 'Nyan such cat'})
    }

    res.status(200).json(cat)



}

module.exports = {
    getCats,
    getCat,
    createCat,
    deleteCat,
    updateCat,
}