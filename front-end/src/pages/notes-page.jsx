import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {AiFillDelete} from 'react-icons/ai'
import { deleteNote, getNotes, reset } from '../features/notesSlice';
import {NotesInput} from '../components/NotesInput';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { notes } from '../features/notesSlice';
import Footer from '../components/Footer'


const NotesPage = (note) => {
  const dispatch = useDispatch();

  const { notes, isLoading, isError, message } = useSelector(
    (state) => state.notes
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getNotes())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    // return <motion.div><i style={{position: 'absolute', top: '50%', left: '50%', fontSize: '5rem'}} className="lni lni-reload"></i></motion.div>
  }

  return (
    <div style={{backgroundColor: '#2C3333', height: '100vh', display: 'flex', flexDirection:'column'}}>
      <Container style={{padding: '40px 0', flex: '1'}}>
      <h2 style={{textAlign: 'center', color: '#CBE4DE'}}>Notes</h2>
       <ul>
        <Row xs={1} md={3} lg={4} className="g-4">
        <Card className='bg-transparent text-dark border-0'>
          <Card.Body>
            <NotesInput/>
          </Card.Body>
        </Card>
        {notes.map((note) => (
          <Col key={note._id}>
          <Card style={{  margin: '10px', background: '#2E4F4F'}} key={note._id}>
            <Card.Title style={{fontSize: '1.1em', padding: '10px 15px', color: '#CBE4DE'}}><b>{note.title}</b></Card.Title>
            <Card.Text style={{padding: '0 15px', fontSize: '0.8em', color: '#CBE4DE'}}>{note.content}</Card.Text>
            <AiFillDelete onClick={() => dispatch(deleteNote(note._id))} style={{width: 'auto', margin: '10px', padding: '15px', color: '#CBE4DE', cursor: 'pointer'}}/>
            {/* <Button style={{width: 'auto', margin: '10px'}}>Update</Button> */}
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

export default NotesPage