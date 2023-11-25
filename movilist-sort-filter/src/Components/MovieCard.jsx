import React from "react";

const MovieCard = (props) => {
  let data = (props.props)


  return <div>
    <div data-testid="movie-card"
    >

      <div style={{ display: "flex", margin: "30px", gap: "10px" }}>
        <div>
          <img src={data.poster} alt="Movie" style={{ height: "200px" }} />
        </div>
        <div>
          <h2>{data.title}</h2>
          <h4>Year: {data.year}</h4>
          <h6>ID: {data.imdbID}</h6>
          <p>Type: {data.type}</p>
          <p> Rating: {data.rating}</p>
        </div>
      </div>
    </div>
  </div>
};

export default MovieCard;
