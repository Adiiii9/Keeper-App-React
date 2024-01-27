import "./note.css"
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note({item,id,del}){

    function handleclick(e){
        del(id)
        // alert("clicked")

    }

   



    return(
        <>
        <section>
        <div className="note-container">
            <div className="note-inner-container">
                <div className="note-title-container">
                <p>{item.title}</p>

                </div>
                <div className="note-addnote-container">
                <p>{item.addnote}</p>
                </div>
                <button onClick={handleclick} className="deletenote">
                <DeleteIcon  fontSize="small" ></DeleteIcon>
                </button>
            </div>
            
        </div>
        </section>

        </>
    )
}

export default Note;