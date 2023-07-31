import React, {useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createNote } from '../features/notesSlice';
import './style.css'

export const NotesInput = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteData = {
      title,
      content,
    }
    
    if (!noteData) {
      return;
    }
    dispatch(createNote(noteData));

    setTitle('');
    setContent('');
  };

  return (
    <Container >
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <div>
        {/* <Form.Label htmlFor="title">Title</Form.Label> */}
        <input
        className='title-input'
          type="text"
          name='text'
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder='Title'
        />
      </div>
      </Form.Group>

      <Form.Group className="mb-3">
      <div>
        {/* <Form.Label htmlFor="content">Content</Form.Label> */}
        <textarea
        className='textarea'
        required
          type='text'
          name='text'
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder='Content'
        />
      </div>
      </Form.Group>
      <button className='notes-btn' type="submit">Create Note</button>
    </Form>
    </Container>
  );
};


// export default NotesInput