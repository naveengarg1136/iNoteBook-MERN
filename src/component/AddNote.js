import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/noteContext'

const AddNote = () => {
    const [note, setNote] = useState({title:"",description:"",tag:"default"})
    const context = useContext(NoteContext);
    const { addNote } = context;

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description,note.tag);
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.id]:e.target.value}); // 
    }

    return (
        <div>
            <div className='container my-3'>
                <h2>
                    Add Note
                </h2>
                <form >
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" id="title" placeholder="Title" onChange={onChange} />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" id="description" placeholder="Description" onChange={onChange}  />
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" id="tag" placeholder="Tag" onChange={onChange}  />
                        <label htmlFor="tag">Tag</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
                </form>



            </div>
        </div>
    )
}

export default AddNote