import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const host= "http://localhost:5000/";
  
  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async() => {
    //API call
    const response = await fetch(`${host}api/notes/fetchallnotes`,
       {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5M2I3ZDdmMzQ2MDI3YWEzZTZkMzE1In0sImlhdCI6MTY1Mzg0ODAzOX0.pQCuBBZb5EEQvGGSpmTnfX4Af7fV9eEIBdtX96iynFI'
        
      } 
    });

    const json=await response.json();
    setNotes(json);
  };

  const addNote = async(title,description,tag) => {
    //API call
    const response = await fetch(`${host}api/notes/addnote`,
       {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5M2I3ZDdmMzQ2MDI3YWEzZTZkMzE1In0sImlhdCI6MTY1Mzg0ODAzOX0.pQCuBBZb5EEQvGGSpmTnfX4Af7fV9eEIBdtX96iynFI'
        
      },
      body: JSON.stringify({title,description,tag}) 
    });

    let newNote= await response.json();
   
    setNotes(notes.concat(newNote));
  };
  const deleteNote = async(id) => {
    // API call 
    const response = await fetch(`${host}api/notes/deletenote/${id}`,
       {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5M2I3ZDdmMzQ2MDI3YWEzZTZkMzE1In0sImlhdCI6MTY1Mzg0ODAzOX0.pQCuBBZb5EEQvGGSpmTnfX4Af7fV9eEIBdtX96iynFI'
        
      },
      
    });

    response.json();
    
      const newNote= notes.filter((notes)=>{return notes._id!==id})
      setNotes(newNote);
  };
  const editNode = async(id,title,description,tag) => {
    //API call
     await fetch(`${host}api/notes/updatenote/${id}`,
       {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
        'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5M2I3ZDdmMzQ2MDI3YWEzZTZkMzE1In0sImlhdCI6MTY1Mzg0ODAzOX0.pQCuBBZb5EEQvGGSpmTnfX4Af7fV9eEIBdtX96iynFI'
        
      },
      body: JSON.stringify({title,description,tag}) 
    });

    //Logic to edit in clint side
    let dummynote=JSON.parse(JSON.stringify(notes));
    
    for (let index = 0; index < dummynote.length; index++) {
      
      if(dummynote[index]._id===id){
        dummynote[index].title=title;
        dummynote[index].description=description;
        dummynote[index].tag=tag;
        break;
      }   
    }
    setNotes(dummynote);

  };

  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNode,fetchAllNotes }}>

      {props.children}
    </NoteContext.Provider>

  )

}

export default NoteState;