const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const Note = require('../models/notesModel')
const User = require('../models/userModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user.id })

  res.status(200).json(notes)
})


//get one note
// const getNote = asyncHandler(async (req, res) => {
//   try {
//     const note = await Note.findById(req.params.id)

//     if (!note) {
//       res.status(404)
//       throw new Error('Note not found')
//     }

//     res.status(200).json(note)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// });


//create a note
const createNote = asyncHandler(async(req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({
      title,
      content,
      user: req.user.id, // associate the note with the current user
    });
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')  
  }}

  // const { title, content } = req.body;
  // const note = await Note.create({
  //   title,
  //   content,
  //   user: req.user.id,
  // })

  // res.status(200).json(note)
})


const updateNote = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid note ID' });
  }

  Note.findByIdAndUpdate(id, updates, { new: true })
    .then((updatedNote) => {
      if (updatedNote) {
        res.json(updatedNote);
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

const deleteNote = async (req, res) => {
  const _id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: 'Invalid note ID' });
  }

  try {
    const note = await Note.findByIdAndDelete(_id);

    if (note) {
      res.json({ message: 'Note deleted successfully' });
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {getNotes, createNote, updateNote, deleteNote}