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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addNote, setNotes, setLoading, setError } = notesSlice.actions;

export const createNote = (note) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const newNote = await notesService.create(note);
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
