import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../features/notesSlice';

const notesInput = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !content) {
      return;
    }

    dispatch(createNote({ title, content }));

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button type="submit">Create Note</button>
    </form>
  );
};


export default notesInput