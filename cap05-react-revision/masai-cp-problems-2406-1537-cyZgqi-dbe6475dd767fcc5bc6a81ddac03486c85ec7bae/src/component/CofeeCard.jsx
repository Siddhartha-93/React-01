import React from "react";
import style from "../component/style.module.css";
const CofeeCard = (props) => {
  const { title, price, description, ingredients, image } = props.props
  return (
    <div id={style.coffeeCard} className="coffee_card">
      <img src={image} />
      <div>
        <h2 className="title">{title}</h2>
        <p className="price">Rs. {price}</p>
        <p>{description}</p>
        <h5>Ingredients</h5>
        <ul>
          {ingredients.map((ele, indx) => {
            return <li key={indx}>{ele}</li>
          })}
        </ul>
        {/* map ingredients intside li into ul(ul tag have class - ingredients) */}
      </div>
    </div>
  );
};

export default CofeeCard;
