import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/images';

export const fetchImages = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const addImage = async (image) => {
  const response = await axios.post(baseUrl, image);
  return response.data;
};

export const updateImage = async (image) => {
  const response = await axios.put(`${baseUrl}/${image.id}`, image);
  return response.data;
};

export const deleteImage = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};
