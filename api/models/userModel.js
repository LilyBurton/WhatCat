const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(username, email, password, confirmPassword) {

    if (!username || !email || !password || !confirmPassword) {
        throw Error('All fields must be required')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid!')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough!')
    }
    if (confirmPassword != password) {
        throw Error('Password does not match!')
    }

    const usernameExists = await this.findOne({ username })
    const emailExists = await this.findOne({ email })

    if (usernameExists) {
        throw Error('Username already exists')
    } 
    if (emailExists) {
        throw Error('Email already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ username, email, password: hash, confirmPassword: hash })

    return user
}



module.exports = mongoose.model('User', userSchema);