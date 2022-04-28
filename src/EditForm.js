import React, { useEffect, useState } from "react";
import "./index.css"

function EditForm({ id, meme, toggleForm, updateMemes}) {
    const [caption1, setCaption1]=useState(meme.caption1)
    const [caption2, setCaption2]=useState(meme.caption2)
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:4000/memes/" + id, {
            method: "PATCH",
            headers: {
                'Accept' : "application/json",
                'Content-Type': "Application/json"
            },
            body: JSON.stringify({caption1, caption2})
        })
        .then((r)=>r.json())
        .then(data=> {
            updateMemes(data)
        })

    }
    
        
    

    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit} className="edit-form">
                <h3>Edit Meme Captions</h3>
                <label>Caption 1:
                    <input 
                    type="text"
                    name="caption1"
                    value={caption1}
                    onChange={(e)=>setCaption1(e.target.value)}
                    placeholder="Type New Caption Here"
                    />
                </label>
                <label>Caption 2:
                    <input type="text"
                    name="caption2"
                    value={caption2}
                    onChange={(e)=>setCaption2(e.target.value)}
                    placeholder="Type New Caption Here"
                    />
                    <button type="submit">Update Meme!</button>
                </label>
            </form>
        </div>
    )
}



export default EditForm