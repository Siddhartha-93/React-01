import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

const MovieList = () => {
  const [movieDate, setMovieData] = useState([]);
  const [filter, setFilter] = useState([])
  const [filterBy, setFilterBy] = useState("default")
  const [sortBy, setSortBy] = useState("default")
  const[loding, setLoding] = useState(true)
  const url ="http://localhost:8080/movies?type="
  // const url ="http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies"
  useEffect(() => {
    const fetchData = async (para) => {
      const req = await fetch(url + para);
      const data = await req.json()
      setLoding(false)
      return setMovieData(data)
    }
    fetchData(filter)

    //for filtering
    let filterData = movieDate.filter((e) => {

      if (filterBy === "default") {
        return movieDate
      } else if (filterBy === "movie") {
        return e.type === filterBy
      } else if (filterBy === "series") {
        return e.type === filterBy
      } else if (filterBy === "game") {
        return e.type === filterBy
      }
    })
    let sortedData = filterData.sort((a, b) => {
      if (sortBy === "default") {
        return null ;
      } else if (sortBy === "newest-first") {
        return b.year - a.year
      } else if (sortBy === "oldest-first" ) {
        return a.year - b.year
      }
    })
    setFilter(sortedData)
  }, [filterBy,sortBy, movieDate])
 
  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"default"}>--</option>
          <option value="oldest-first">Oldest first</option>
          <option value="newest-first">Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value={"default"} >--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>

        </select>
      </div>
      {/* Either Loading component or below div with `data-testid="movie-container"` should exist on DOM at a time */}
      {loding ? <Loading />
      :<div data-testid="movie-container">
        {/* render all the movies data with the help of MovieCard component here */}
        {filter.map((ele) => {
          return <MovieCard key={ele.id} props={ele} />

        })}
      </div>}
    </div>
  );
};

export default MovieList;
