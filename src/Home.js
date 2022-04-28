import React from "react";
import noeyescat from "./images/noeyescat.jpg"
import "./index.css"
function Home() {
    return (
        <div className="home">
            <h2>Welcome to the generator of life as we know it.</h2>
            <h3>Create and edit cat memes with your own images and captions!</h3>
            <img src={noeyescat} alt=""/>
        </div>
    )
}

export default Home;