import React,{useState}from "react";
import NoteContext from "./noteContext";

export const NoteState = (props) => {
    const initialnotes = [
        {
            "_id": "6293c14eb65bf022e685bd5f",
            "user": "6293b7d7f346027aa3e6d315",
            "title": "Kaam karo",
            "description": "Haan yaar kar rha hu",
            "tag": "General",
            "Date": "2022-05-29T18:54:06.930Z",
            "__v": 0
          },
          {
            "_id": "6293c1758187ea979b09440d",
            "user": "6293b7d7f346027aa3e6d315",
            "title": "Kaam karo",
            "description": "Haan yaar kar rha hu",
            "tag": "General",
            "Date": "2022-05-29T18:54:45.303Z",
            "__v": 0
          },
          {
            "_id": "6293c1933a6454a5f91cab26",
            "user": "6293b7d7f346027aa3e6d315",
            "title": "Kaam karo",
            "description": "Haan yaar kar rha hu",
            "tag": "General",
            "Date": "2022-05-29T18:55:15.856Z",
            "__v": 0
          },
          {
            "_id": "6293c1a0dcb3ea4eefa5bb07",
            "user": "6293b7d7f346027aa3e6d315",
            "title": "Kaam karo",
            "description": "Haan yaar kar rha hu",
            "tag": "General",
            "Date": "2022-05-29T18:55:28.400Z",
            "__v": 0
          },
          {
            "_id": "6293c2f4e72f8e15d5bc1fd9",
            "user": "6293b7d7f346027aa3e6d315",
            "title": "Kaam karo",
            "description": "Haan yaar kar rha hu",
            "tag": "personal",
            "Date": "2022-05-29T19:01:08.714Z",
            "__v": 0
          }
        ];
        const [notes, setNotes] = useState(initialnotes);
    return (
      
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
        
    )

}

export default NoteState;