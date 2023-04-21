const express = require('express')
const router = express.Router()
const {createUser, loginUser, getMe} = require('../controllers/userControllers')
const {protect} = require('../middleware/authMiddleware')

router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router