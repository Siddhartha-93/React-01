import React, { useState } from "react";
import "./App.css"
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";

const App = () => {
  const [togel,setTogel]=useState(false)
  return (
    <div id="app" className="App">
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
      <button data-testid="toggle-btn" onClick={()=>{setTogel(!togel)}}>{togel?`Show Movies`:`Add Movie` }</button>
      <div data-testid="container">
        {togel?<AddMovie/>:<MovieList/>}
        {/* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/}
      </div>
    </div>
  );
};

export default App;
