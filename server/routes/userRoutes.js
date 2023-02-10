const { register, login, logout, getFavoritProduct, favory, unfavory } = require('../controllers/userController')
const { authorization } = require('../midleweares/authMid')

const router = require('express').Router()

router.post('/', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/getfavory', authorization, getFavoritProduct)
router.put('/favory/:id', authorization, favory)
router.put('/unfavory/:id', authorization, unfavory)

module.exports = router