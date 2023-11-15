import React, { useState } from "react";
import Fiction from "./components/Fiction.jsx";
import NonFiction from "./components/NonFiction.jsx";
import "./App.css";
function App() {
  let [togel,setTogel]=useState(true)
  let hendelClick=()=>{
    setTogel(!togel)
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button onClick={hendelClick} data-testid="toggle-btn">
        {togel?"Show Non-Fiction Books":"Show Fictional Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {togel?<Fiction/>:<NonFiction/>}
      </div>
    </div>
  );
}

export default App;
