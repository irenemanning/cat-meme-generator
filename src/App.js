import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Navbar from './Navbar';
import CreateCatMeme from './CreateCatMeme';
import CatMemes from "./CatMemes";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/memes")
      .then((r) => r.json())
      .then((catMemeData) => {
        setMemes(catMemeData);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/catmemes">
          <CatMemes memes={memes} setMemes={setMemes}/>
        </Route>
        <Route exact path="/createcatmeme">
          <CreateCatMeme setMemes={setMemes} memes={memes} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
