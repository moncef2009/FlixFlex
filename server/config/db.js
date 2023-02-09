const mongoose = require('mongoose')


const connectDB = () => {
    mongoose
        .set('strictQuery', false)
        .connect(process.env.MONGO_URI)
        .then((conn) => {
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
        })
}

module.exports = connectDB