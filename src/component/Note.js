import React, { useContext,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import NoteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

const Note = () => {
    let history= useHistory();
    const context = useContext(NoteContext);
    const { notes ,fetchAllNotes } = context;

    useEffect(() => {
        if(localStorage.getItem('token')){
            fetchAllNotes();
        }
        else{
            history.push("/login");
        }
        
        // eslint-disable-next-line
    }, [])
    
    return (
        <div className="row my-3">

            <h2> Your Notes</h2>
            <div className='container mx-1'>
                {notes.length===0 && "No Notes to display"}
            </div>
            {notes.map((note) => {
                
                return <Noteitem key={note._id} note={note} />

            })}
        </div>
    )
}

export default Note