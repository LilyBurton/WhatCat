require('dotenv').config()

const express = require('express')
const catsRoutes = require('./routes/cats')
const UserModel = require('./models/userModel')
const userRoute = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/cats', catsRoutes)
app.use('/user', userRoute)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is running!!!", process.env.PORT)
})

