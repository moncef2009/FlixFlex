const User = require('../models/User')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const maxAge = 3 * 24 * 60 * 60
const genToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge })
}


const register = asyncHandler(async (req, res) => {

    try {
        const { name, password } = req.body
        console.log(req.body);
        const userName = name + Math.floor(Math.random() * 100)
        const user = await User.create({ name: userName, password: password })
        const token = genToken(user._id)

        res.cookie('jwt', token, {
            maxAge: maxAge * 1000
        })
            .status(201).json({ user })

    } catch (error) {
        res.status(500).json({ 'error': error.message })
    }
})


const login = asyncHandler(async (req, res) => {
    try {
        const { name } = req.body
        const user = await User.findOne({ name })
        const token = genToken(user._id)


        res.cookie('jwt', token, {
            maxAge: maxAge * 1000
        })
            .status(200).json({ user })
    } catch (error) {
        res.status(500).json({ 'error': error.message })
    }
})



const logout = asyncHandler(async (req, res) => {
    try {
        res.clearCookie('jwt').send('ok')
    } catch (error) {
        res.json({ 'error': error.message })
    }
})

const getFavoritProduct = asyncHandler(async (req, res) => {
    try {
        const userFavIdis = await User.findById(req.user.id).select('favory -_id')
        res.status(200).json(userFavIdis)
    } catch (error) {



    }
})

const favory = asyncHandler(async (req, res) => {
    console.log(req.body);
    try {
        const user = await User.findByIdAndUpdate(req.user.id, {
            $push: { favory: req.body }
        }, { new: true })
        res.json(user)
    }
    catch (error) {
        res.json({ 'error': error.message })
    }
})

const unfavory = asyncHandler(async (req, res) => {
    try {

        const user = await User.findByIdAndUpdate(req.user.id, {
            $pull: { favory: req.body }
        }, { new: true })
        res.json(user)


    }
    catch (error) {
        res.json({ 'error': error.message })
    }
})



module.exports = { register, login, logout, favory, unfavory, getFavoritProduct }