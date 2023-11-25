import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import styles from "../Components/bookRack.module.css"

const BookRack = () => {
  const [book, setBook] = useState(false)
  const [bookData, setBookData] = useState([]);
 
  useEffect(() => {
    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-books")
      .then((res) => res.json())
      .then((data) => {
        setBookData(data.data)
      })
  }, [])
  console.log(bookData);
  let getBook = () => {
    setBook(!book)
  }

  let hendelClick = () => {
    setBook(!book)
  }

  return (
    <div id={styles.cont}>
      {/* create the h1 tag as mentioned in the boiler plate */}
      <h1>Book Hous</h1>

      {/* Either Hide Books button + data-cy="container" is visible or else Get Books button will be visible at a time */}
      {book ?
        <button style={{ backgroundColor: "red" }} onClick={getBook} className="hide-books">
          Hide Books
        </button> :
        <button style={{ backgroundColor: "#46dd46" }} onClick={hendelClick} className="get-books">
          Get Books
        </button> }

        {book && <div data-cy="container">
        
          {bookData.map((ele) => <BookCard key={ele.id} props={ele} />)}

        {/* you can render the data here by using BookCard */}
      </div> }
    </div>
  ); 
};

export default BookRack;
