import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getNotes } from '../features/notesSlice';
// import { notes } from '../features/notesSlice';


const notesPage = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  console.log(notes)
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        {notes.map(note => (
          <li className="nav-item" key={note._id}>
            <a className="nav-link" href={`#${note._id}`} data-bs-toggle="tab">
              {note.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {notes.map(note => (
          <div className="tab-pane" key={note._id} id={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default notesPage