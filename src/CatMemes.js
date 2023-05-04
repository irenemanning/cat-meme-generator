import React from "react";

import CatMeme from "./CatMeme";
import "./index.css";

function CatMemes({ increment, setIncrement, memes, setMemes}) {

  function handleIncrementChange(e){
      setIncrement(parseInt(e.target.value))
  }

  function updateMemes(catMeme) {
    const copyMemes = [...memes];
    const oldMeme = memes.find((meme) => meme.id === catMeme.id);
    const index = memes.indexOf(oldMeme);
    copyMemes.splice(index, 1, catMeme);
    setMemes(copyMemes);
  }
  function onDeleteMeme(deletedMeme) {
      const updateMemes = memes.filter((meme)=> meme.id !== deletedMeme.id)
      setMemes(updateMemes)
  }
  const catMemes = memes.map((meme) => (
    <CatMeme increment={increment} setIncrement={setIncrement} meme={meme} key={meme.id} updateMemes={updateMemes} onDeleteMeme={onDeleteMeme} />
  ));
  return (
      <div>
          <label>Count increment</label>
        <input 
          style={{border: "2px solid black", marginTop: "150px"}} 
          type="text"
          placeholder="increment"A
          onChange={handleIncrementChange}
          />
    
          <div className="memes-page">{catMemes}</div>
      </div>
    )
}

export default CatMemes;