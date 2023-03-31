const express = require('express')
const router = express.Router()
const {createUser, loginUser} = require('../controllers/userControllers')
// const {protect} = require('../middleware/authMiddleware')

router.post('/', createUser)
router.post('/login', loginUser)

module.exports = router