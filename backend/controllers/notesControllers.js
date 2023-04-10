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

//callback function to retrieve notes
const getNotes = (req, res) => {
  Note.find({})
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
};

//get one note

const getNote = asyncHandler(async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)

    if (!note) {
      res.status(404)
      throw new Error('Note not found')
    }

    res.status(200).json(note)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});


//create a note
const createNote = asyncHandler(async(req, res) => {
  const {title, content} = req.body;

    const note = {
        _id: new mongoose.Types.ObjectId(),
        title,
        content,
      };
    
      try {
        const newNote = await Note.create(note);
        res.status(201).json(newNote);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
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

module.exports = {getNotes, getNote, createNote, updateNote, deleteNote}