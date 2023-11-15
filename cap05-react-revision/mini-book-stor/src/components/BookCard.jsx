export default function BookCard({ props }) {
  const { title, author, year, price, img } = props;
  return (
    <div data-testid='book-card'>
      <img src={img} alt={title} />
      <b><div data-testid='book-card-title'>{title}
        <span>({year})</span></div></b>
      <div data-testid='book-card-author'>{author}</div>
      <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

