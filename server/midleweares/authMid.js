
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authorization = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt

    if (!token) {
        res.status(401).json({ message: 'no token' })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decode.id)
        next()
    } catch (error) {
        res.json({ message: error.message })
    }
}
)
module.exports = { authorization } 