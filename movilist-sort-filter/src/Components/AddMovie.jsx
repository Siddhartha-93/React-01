import React, { useState } from "react";
// const url ="http://localhost:8080/movies"
const url ="http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies"


const AddMovie = () => {
  const [addmovies, setAddmovies] = useState({
    title: "",
    year: "",
    imdbID: "",
    type: "",
    poster: "",
  })
 

  let addChng = (e) => {
    setAddmovies({
      ...addmovies,
      [e.target.name]: e.target.value
    })
  }
  let onSubmit = (e) => {
    e.preventDefault();
    console.log(addmovies);
    fetch(url , {
      method: "POST",
      body: JSON.stringify(addmovies),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((req) => {
      return req.json();
    }).then((data)=>{
      console.log(data);
      return data
    })
    
  }



  return (
    <div data-testid="add-movie">
      <h1>Add Movie</h1>

      <form data-testid="add-movie-form"
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "center",
          margin: "auto",
          width: "50%"
        }}>

        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={addChng} />

        <label htmlFor="year">Year</label>
        <input type="number" id="year" name="year" onChange={addChng} />

        <label htmlFor="imdbID">imdbID</label>
        <input type="text" id="imdbID" name="imdbID" onChange={addChng} />

        <label htmlFor="type">Type</label>
        <select id="type" name="type" onChange={addChng}>
          <option value="default">--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>

        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" name="rating" onChange={addChng} />

        <label htmlFor="poster">Poster</label>
        <input type="url" id="poster" name="poster" onChange={addChng} />

        <input type="submit" style={{ width: "30%", margin: "auto" }} />
      </form>

    </div>
  );
};

export default AddMovie;
/*input for the title should name="title"
input for the year should have name="year"
input for imdbID should have name="imdbID"
select tag for selecting movie type should have name="type"
options should be there for Movie, Series, and Game with the same text content, and the default option should have textContent Select a type
input for rating should be having name="rating"
input for the poster should be having name="poster"
You are free to create the label tags.*/