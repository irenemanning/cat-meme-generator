import React, { useEffect, useState } from "react";
import  { Routes, Route } from "react-router-dom";
import Home from './Home'
import Navbar from './Navbar';
import CreateCatMeme from './CreateCatMeme';
import CatMemes from "./CatMemes";

function App() {
  const [memes, setMemes] = useState([]);
  
  const [increment, setIncrement]= useState(1)

  useEffect(() => {
    fetch("http://localhost:3000/memes")
      .then(r => r.json())
      .then(catMemeData => {
        setMemes(catMemeData);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/catmemes" element={<CatMemes increment={increment} setIncrement={setIncrement} memes={memes} setMemes={setMemes}/>}/>
        <Route exact path="/createcatmeme" element={<CreateCatMeme setMemes={setMemes} memes={memes} />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
