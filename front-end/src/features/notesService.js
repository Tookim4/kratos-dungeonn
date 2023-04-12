import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/notes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject, userId) => {
  const response = await axios.post(baseUrl, {...newObject, user: userId});
  return response.data;
};

const update = async (id, updatedNote) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedNote);
  return response.data;
};

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, create, update, remove };
