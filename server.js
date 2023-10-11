require('dotenv').config()

const express = require('express')
const flowerRoutes = require('./routes/flowerRoutes')
const { default: mongoose } = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const URI = process.env.MONGODB_URI

const app = express()

// middleware 
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "DELETE"],
}))

app.use(express.json())

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/bound'))
}

app.use((request, response, next) => {
    console.log(request.path, request.method)
    next()
})

// attach all routes
app.use('/api/flowers', flowerRoutes)

// connect to db
mongoose.connect(URI)
    .then(() => {
        // listen to port
        app.listen(PORT, () => {
            console.log('connected to database -> listening on port', PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })