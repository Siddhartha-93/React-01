import styles from "../Components/bookRack.module.css"
import BorrowBtn from "./BorrowBtn";
const BookCard = (props) => {

  console.log(props.props);
  const { title, author, isbn, category } = props.props
  // get the required props from the parent Component
  return (
    <div className="book_card">
      <div className={styles.card}>
        <h3 className="title">{title}</h3>
        <h5 className="author"> {author} </h5>
        <p className="isbn">{category} </p>
        <h6 className="category">{isbn} </h6>

        {/* Add the title in h3 tag, 
        author in h5 tag, 
        category in h6 tag,
         isbn in p tag. 
         use BorrowBtn to create the required buttons in Book Card */}

      <BorrowBtn/>
      </div>
      {/* you can user the BorrowBtn here */}
    </div>
  );
};

export default BookCard;
