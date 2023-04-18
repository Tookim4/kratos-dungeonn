import { createSlice } from '@reduxjs/toolkit';
import { fetchImages, addImage as addImageAPI, updateImage as updateImageAPI, deleteImage as deleteImageAPI } from './imageService';

const initialState = {
  images: [],
  status: 'idle',
  error: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    imagesLoading(state) {
      state.status = 'loading';
    },
    imagesReceived(state, action) {
      state.images = action.payload;
      state.status = 'succeeded';
    },
    imagesFailed(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    imageAdded(state, action) {
      state.images.push(action.payload);
    },
    imageUpdated(state, action) {
      const imageIndex = state.images.findIndex(image => image.id === action.payload.id);
      if (imageIndex >= 0) {
        state.images[imageIndex] = action.payload;
      }
    },
    imageDeleted(state, action) {
      state.images = state.images.filter(image => image.id !== action.payload);
    },
  },
});

export const { imagesLoading, imagesReceived, imagesFailed, imageAdded, imageUpdated, imageDeleted } = imageSlice.actions;

export default imageSlice.reducer;

export const fetchImagesAsync = () => async (dispatch) => {
  dispatch(imagesLoading());
  try {
    const images = await fetchImages();
    dispatch(imagesReceived(images));
  } catch (error) {
    dispatch(imagesFailed(error.message));
  }
};

export const addImage = (image) => async (dispatch) => {
  const newImage = await addImageAPI(image);
  dispatch(imageAdded(newImage));
  return newImage;
};

export const updateImage = (image) => async (dispatch) => {
  const updatedImage = await updateImageAPI(image);
  dispatch(imageUpdated(updatedImage));
  return updatedImage;
};

export const deleteImage = (id) => async (dispatch) => {
  await deleteImageAPI(id);
  dispatch(imageDeleted(id));
};
