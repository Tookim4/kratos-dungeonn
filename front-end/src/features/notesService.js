import axios from 'axios';

const API_URL = 'https://kratos-dungeon.onrender.com/api/notes/';

// Get user goals
const getNotes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// Create new goal
const createNote = async (noteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, noteData, config)

  return response.data
}


// const update = async (id, updatedNote) => {
//   const response = await axios.put(`${baseUrl}/${id}`, updatedNote);
//   return response.data;
// };  

// const remove = async (id) => {
//   const response = await axios.delete(`${API_URL}/${id}`);
//   return response.data;
// };
// Delete user goal
const deleteNote = async (noteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + noteId, config)

  return response.data
}

export default { getNotes, createNote, deleteNote };