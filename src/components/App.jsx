import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const[lists,addList]=useState([]);

    function addnote(note){
        addList(prevList =>{
            return [...prevList,note] });
    };
    function deletenote(id){
        addList(prevList=>{
            return prevList.filter((noteitem,index)=>{
                return index !==id;
            })
        })
    };

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addnote}
      />
      {lists.map((listitem,index) =>{ return <Note onDelete={deletenote} key={index} id={index} title={listitem.title} content={listitem.note}/> } ) }
      <Footer />
    </div>
  );
}

export default App;
