import { createSlice } from '@reduxjs/toolkit';
import notesService from '../features/notesService';

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      const noteToUpdate = state.notes.find((note) => note.id === id);
      if (noteToUpdate) {
        noteToUpdate.title = title;
        noteToUpdate.content = content;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addNote, setNotes, updateNote, setLoading, setError } = notesSlice.actions;

export const createNote = (note, userId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const newNote = await notesService.create(note, userId);
    dispatch(addNote(newNote));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const getNotes = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const notes = await notesService.getAll();
    dispatch(setNotes(notes));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

// export const updateNoteContent = async (id, updatedNote, dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     await notesService.update(id, updatedNote);
//     dispatch(getNotes());
//   } catch (error) {
//     console.error(error);
//   }
// };

export const updateNoteContent = (updatedNote) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await notesService.update(updatedNote.id, updatedNote);
    dispatch(editNoteInStore(updatedNote));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const editNoteInStore = (updatedNote) => (dispatch, getState) => {
  const { notes } = getState().notesSlice;
  const index = notes.findIndex((note) => note.id === updatedNote.id);
  if (index !== -1) {
    notes[index] = updatedNote;
    dispatch(setNotes(notes));
  }
};


export const deleteNote = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await notesService.remove(id);
    dispatch(setLoading(false));
    dispatch(getNotes());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const notes = (state) => state.notes.notes;

export default notesSlice.reducer;
