import React from "react";
import "./index.css"
import EditForm from "./EditForm";
import { useState } from "react";

function CatMeme({ meme, updateMemes, onDeleteMeme }){
    let { id, caption1, caption2, image } = meme
    const [showForm, setShowForm]= useState(false)
    function toggleForm() {
        setShowForm(!showForm)
    }
    
    function handleDelete() {
        fetch("http://localhost:4000/memes/" + id, {
            method: "DELETE",
        })
        .then((r)=>r.json())
        .then(()=> onDeleteMeme(meme))
    }
    return (
        <div className="center-meme">
            <div className="meme-container">
                <h3>{caption1}</h3>
                <img src={image} alt=""/>
                <h3>{caption2}</h3>
                { showForm ? <EditForm key={id} id={id} meme={meme} toggleForm={toggleForm} updateMemes={updateMemes} /> : null }
            </div>
            <button onClick={ toggleForm } className="edit-button">{showForm ? 'Done':"Edit"}</button>
            <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
        
    )
}

export default CatMeme;