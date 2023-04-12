import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteNote, getNotes, updateNoteContent } from '../features/notesSlice';
import {NotesInput} from '../components/NotesInput'
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
    <div>
      <NotesInput/>
      <h2>Notes:</h2>
      (<ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
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
                <button onClick={() => dispatch(deleteNote(note._id))} className="btn btn-danger">Delete</button>
                <button onClick={() => setEditing(true)}>Edit</button>
                </>)} */}
          </li>
        ))}
      </ul>)
      
      <Footer/>
    </div>
  );
};

export default notesPage