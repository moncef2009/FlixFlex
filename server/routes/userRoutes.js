const { register, login, logout, getFavoritProduct, favory, unfavory } = require('../controllers/userController')
const { authorization } = require('../midleweares/authMid')

const router = require('express').Router()

router.post('/', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/getfavory', authorization, getFavoritProduct)
router.put('/favory/:name', authorization, favory)
router.put('/unfavory/:name', authorization, unfavory)

module.exports = router