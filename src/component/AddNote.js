import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import AlertContext from '../context/alert/alertContext'

const AddNote = () => {
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const context = useContext(NoteContext);
    const { addNote } = context;
    const context2 = useContext(AlertContext);
    const { showAlert } = context2;

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        showAlert("Note Added suceesfully","success");
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
                        <input type="text" className="form-control" id="title" placeholder="Title" value={note.title} onChange={onChange} />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" id="description" placeholder="Description" value={note.description} onChange={onChange}  />
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="text" className="form-control" id="tag" placeholder="Tag" value={note.tag} onChange={onChange}  />
                        <label htmlFor="tag">Tag</label>
                    </div>
                    <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add Note</button>
                </form>



            </div>
        </div>
    )
}

export default AddNote