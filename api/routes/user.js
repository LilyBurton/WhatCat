const express = require('express')

const router = express.Router()

// controller functions

const { loginUser, signupUser } = require('../controller/userController')

//login route
router.post('./login', loginUser)

//signup route
router.post('./register', signupUser)

module.exports = router;