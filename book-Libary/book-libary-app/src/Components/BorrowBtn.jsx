import React, { useState } from "react";
import styles from "./BorrowBtn.module.css";
const BorrowBtn = () => {
  const [borrow, setBorrow] = useState(false);
  function hendelClick() {
    setBorrow(true);
  }
  function hendelClicks() {
    setBorrow(false)
  }
  return <div id={styles.btn}>
    <div>
      <button className="borrow_book_button"
        style={{ backgroundColor: "#46dd46" }}
        onClick={hendelClick}
       >

        {borrow ? "Borrowed" : "Borrow"}

      </button>
    </div>
    <div>
      {borrow && (
        <button className="return_book_button"
          style={{ backgroundColor: "red" }}
          onClick={hendelClicks}>
          Return
        </button>)}
    </div>
    {/* Add the buttons as per the requirement */}
  </div>;
};

export default BorrowBtn;
