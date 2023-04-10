const express = require('express')
const router = express.Router()
const nControllers = require('../controllers/notesControllers')
// Get all notes
router.get('/', nControllers.getNotes);

// Get a single note
router.get('/:id', nControllers.getNote);

// Create a new note
router.post('/', nControllers.createNote);

// Update a note
router.put('/:id', nControllers.updateNote);

// Delete a note
router.delete('/:id', nControllers.deleteNote);

module.exports = router