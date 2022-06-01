import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

const Note = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">

            <h2> Your Notes</h2>
            {notes.map((note) => {
                return <Noteitem note={note} />
            })}
        </div>
    )
}

export default Note