import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./index.css"

function CreateCatMeme({ setMemes, memes }) {
    const [formData, setFormData] = useState({
        caption1: "",
        caption2: "",
        image: ""
    });
    // const history = useHistory()
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData);
        fetch('http://localhost:3000/memes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "image": formData.image,
                "caption1": formData.caption1,
                "caption2": formData.caption2
            })
        })
        .then(r => r.json())
        .then((newCatMeme) => {
            setMemes([...memes, newCatMeme,])
            // history.push("/catmemes")
        })
    }
    return (
        <div className="create-meme-form">
            <form onSubmit={handleSubmit} className="form">
                <label>Image:
                    <input 
                    type="text" 
                    name="image"
                    value={formData.image}
                    onChange={handleChange} 
                    placeholder="IMAGE URL HERE"/>
                </label>
                <label>Caption 1:
                    <input 
                    type="text" 
                    name="caption1"
                    value={formData.caption1} 
                    onChange={handleChange}
                    placeholder="TYPE CAPTION HERE"/>
                </label>
                <label>Caption 2:
                    <input 
                    type="text" 
                    name="caption2" 
                    value={formData.caption2}
                    onChange={handleChange}
                    placeholder="TYPE CAPTION HERE"/>
                </label>
               <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default CreateCatMeme;