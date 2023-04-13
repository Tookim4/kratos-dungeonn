const express = require('express')
const router = express.Router()
const imageC = require('../controllers/imageControllers')

router.get('/', imageC.getImages)

router.post('/', imageC.createImage)

router.put('/:id', imageC.updateImage)

router.delete('/:id', imageC.deleteImage)

module.exports = router