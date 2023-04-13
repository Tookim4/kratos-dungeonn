const express = require('express')
const app = express()
const asyncHandler = require('express-async-handler')
const multer = require('multer')

// Set up multer for handling file uploads
const upload = multer({ dest: 'images/uploads/' });

const Image = require('../models/imageModel')

const getImages = asyncHandler(async(req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

const createImage = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      const { name, description } = req.body;
      const imageUrl = `images/uploads/${req.file.filename}`;
  
      try {
        const image = await Image.create({ name, description, imageUrl });
        res.status(201).json(image);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });
  }
  

const updateImage = (req, res) => {
    res.status(200).json({message: 'This is an image'})
}

const deleteImage = asyncHandler(async(req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (image) {
          await image.remove();
          res.json({ message: 'Image deleted' });
        } else {
          res.status(404).json({ message: 'Image not found' });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

module.exports = {
    getImages,
    createImage,
    updateImage,
    deleteImage
}