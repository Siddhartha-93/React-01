import data from "../fiction.json";
import BookCard from "./BookCard";
import style from "./style.module.css"

export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{"Fictional Books"}</h1>

      <div id={style.contenar} className="books-container">
      {data.map((ele,inx) => (
        <BookCard key = {inx} props={ele}/>
      ))}
        {/* Map all Fictional Books here */}
      </div>
    </div>
  );
}
