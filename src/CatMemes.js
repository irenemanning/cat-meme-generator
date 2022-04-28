import React, { useEffect } from "react";
import { useState } from "react";
import CatMeme from "./CatMeme";
import "./index.css";

function CatMemes({ memes, setMemes }) {
  

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
    <CatMeme meme={meme} key={meme.id} updateMemes={updateMemes} onDeleteMeme={onDeleteMeme} />
  ));

  return <div className="memes-page">{catMemes}</div>;
}

export default CatMemes;