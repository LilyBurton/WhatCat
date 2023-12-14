const User = require('../models/userModel')

// login user

const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user

const signupUser = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body

    try {
        const user = await User.signup(username, email, password, confirmPassword)

        res.status(200).json({username, email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }