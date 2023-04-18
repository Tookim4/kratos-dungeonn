import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteNote, getNotes } from '../features/notesSlice';
import {NotesInput} from '../components/NotesInput';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
// import { notes } from '../features/notesSlice';
import Footer from '../components/Footer'


const notesPage = (note) => {
  const dispatch = useDispatch();
  // const [editing, setEditing] = useState(false);
  // const [newTitle, setNewTitle] = useState(note.title);
  // const [newContent, setNewContent] = useState(note.content);
  //get the notes state from redux store
  const notes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

//  const handleUpdateNote = ()=>{
//   const updatedNote = {
//     id: note.id,
//     title: newTitle,
//     content: newContent,
//   };
//   dispatch(updateNoteContent(updatedNote));
//   setEditing(false);
//  }

  return (
    <div style={{backgroundColor: 'darkgray', height: '100vh', display: 'flex', flexDirection:'column'}}>
      <Container style={{padding: '40px 0', flex: '1'}}>
      <h2 style={{textAlign: 'center'}}>Notes</h2>
       <ul>
        <Row xs={1} md={3} lg={4} className="g-4">
        <Card className='bg-transparent text-dark border-0'>
          <Card.Body>
            <NotesInput/>
          </Card.Body>
        </Card>
        {notes.map((note) => (
          <Col >
          <Card style={{  margin: '10px'}} key={note._id}>
            <Card.Title style={{fontSize: '1.1em', padding: '10px 15px'}}><b>{note.title}</b></Card.Title>
            <Card.Text style={{padding: '0 15px', fontSize: '0.8em'}}>{note.content}</Card.Text>
            <Button onClick={() => dispatch(deleteNote(note._id))} style={{width: 'auto', margin: '10px'}} className="btn btn-danger">Delete</Button>
            <Button style={{width: 'auto', margin: '10px'}}>Update</Button>
            {/* {editing ? (
                <div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                ></textarea>
                <button onClick={handleUpdateNote}>Save</button>
              </div>
              ) : ( <>
                <button onClick={() => setEditing(true)}>Edit</button>
                </>)} */}
          </Card>
          </Col>
        ))}
        </Row>
      </ul>
      </Container>
      <Footer style={{flexShrink: '0', position:'fixed', bottom:'0'}}/>
    </div>
  );
};

export default notesPage