import data from "../nonfiction.json";
import BookCard from "./BookCard";
import Style from "./style.module.css";

export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>{"Non-Fiction Books"}</h1>

      <div id={Style.contenar} className="books-container">
        {/* Display all Non-Fiction books here */}
        {data.map((ele,inx) => (
          <BookCard key = {inx} props={ele}/>
        ))}
      </div>
    </div>
  );
}
