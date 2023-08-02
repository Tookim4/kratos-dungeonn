import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import authReducer from '../features/authSlice'
import notesSlice from "../features/notesSlice";
// import imageSlice from "../features/imageSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notes:notesSlice,
    },
}, applyMiddleware(thunk))