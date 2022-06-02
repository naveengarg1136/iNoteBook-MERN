import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import { Button, Modal } from 'react-bootstrap';

const Noteitem = (props) => {
    const [show, setShow] = useState(false);

    const context = useContext(NoteContext);
    const { deleteNote, editNode } = context;

    const { note } = props;

    const [enote, setEnote] = useState({title:note.title,description:note.description,tag:note.tag})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updatenote=(e)=>{
        e.preventDefault();
        editNode(note._id,enote.title, enote.description,enote.tag);
        handleClose();
    }

    const onChange=(e)=>{
        setEnote({...enote,[e.target.id]:e.target.value}); // 
        
    }
    return (
        <div className="col-md-3">
            <div className="card my-3" >

                <div className="card-body">
                    <div className='d-flex align-items-center '>
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                        <i className="fa-solid fa-sliders mx-2" onClick={handleShow}></i>

                    </div>
                    <p className="card-text">{note.description}</p>

                    {/* Modal for edit Note */}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit This Note</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form >
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" id="title" placeholder="Title" value={enote.title} onChange={onChange} />
                                    <label htmlFor="title">Title</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" id="description" placeholder="Description" value={enote.description} onChange={onChange} />
                                    <label htmlFor="description">Description</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" className="form-control" id="tag" placeholder="Tag" value={enote.tag} onChange={onChange} />
                                    <label htmlFor="tag">Tag</label>
                                </div>
                               
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={updatenote}>
                                Update Note
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </div>
            </div>
        </div>
    )
}

export default Noteitem