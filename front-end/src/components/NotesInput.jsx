import React, {useState} from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createNote } from '../features/notesSlice';

export const NotesInput = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !content) {
      return;
    }

    dispatch(createNote({ title, content }, ));

    setTitle('');
    setContent('');
  };

  return (
    <Container style={{margin: '10px 0', padding:'15px 0'}}>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <div>
        {/* <Form.Label htmlFor="title">Title</Form.Label> */}
        <Form.Control
          type="text"
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
        <Form.Control
          type='text'
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder='Content'
        />
      </div>
      </Form.Group>
      <Button type="submit">Create Note</Button>
    </Form>
    </Container>
  );
};


// export default NotesInput