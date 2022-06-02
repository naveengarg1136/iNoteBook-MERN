import React, { useContext,useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

const Note = () => {
    const context = useContext(NoteContext);
    const { notes ,fetchAllNotes } = context;

    useEffect(() => {
        fetchAllNotes();
        // eslint-disable-next-line
    }, [])
    
    return (
        <div className="row my-3">

            <h2> Your Notes</h2>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note} />
            })}
        </div>
    )
}

export default Note