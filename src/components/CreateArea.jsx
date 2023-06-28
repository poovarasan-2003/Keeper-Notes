import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const[isexpanded,setexpanded]=useState(false);
    const [text,setText]=useState({
        title:"",
        note:""
    });

    function submitNote(event){
        event.preventDefault();
        props.onAdd(text);
        setText({
            title:"",
            note:""
        })
    }

    function handlechange(event){
        const {name,value}=event.target;
        setText(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    function expand(){
        setexpanded(true);
    }

  return (
    <div>
      <form className="create-note">
        {isexpanded && <input name="title" onChange={handlechange} placeholder="Title" value={text.title} />}
        <textarea name="note" onClick={expand} onChange={handlechange} placeholder="Take a note..." rows={isexpanded?"3":"1"} value={text.note}/>
        <Zoom in={isexpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
