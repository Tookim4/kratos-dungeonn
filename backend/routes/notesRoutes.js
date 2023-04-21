const express = require('express')
const router = express.Router()
const nControllers = require('../controllers/notesControllers')
const { protect } = require('../middleware/authMiddleware')
// Get all notes
router.route('/').get(protect, nControllers.getNotes).post(protect, nControllers.createNote);

// Update a note
router.put('/:id', protect, nControllers.updateNote);

// Delete a note
router.delete('/:id', protect, nControllers.deleteNote);

module.exports = router