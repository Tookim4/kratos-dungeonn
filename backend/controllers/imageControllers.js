const express = require('express')
const app = express()
const asyncHandler = require('express-async-handler')
const multer = require('multer')

// Set up multer storage engine
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'images/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('image_file');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}


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
  const newImage = new Image({
    // name: req.file.filename,
    // path: req.file.path,
  });

  newImage.save()
    .then(image => res.json(image))
    .catch(err => console.log(err));
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