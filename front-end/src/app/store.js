import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
import notesSlice from "../features/notesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notes:notesSlice
    },
})