const express = require('express');
require('dotenv').config()
require('colors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')






const app = express()
const port = process.env.PORT || 5000


//DB connection
connectDB()


//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


//Routes
app.use('/api/users', userRoutes)




app.listen(port, () => {
    console.log(`app listening on port: ${port}`);
})
