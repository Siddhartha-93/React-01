import React, { useEffect, useState } from "react";
import CofeeCard from "../component/CofeeCard";
const Cofee = () => {
  const [coffee, setCoffee] = useState([])

  useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/coffee`)
      .then((res) => res.json())
      .then((data) => setCoffee(data)).catch((err)=>{
        console.log("not fatch",err)
      });
  }, []);
  // get coffee data from json server use useEffect and useState
  return (
    <div className="coffee_container">
        {coffee.map((ele,indx)=>{
          return <CofeeCard key={indx} props={ele} />
        })}

      {/* map coffee into coffee card */}
    </div>
  );
};

export default Cofee;
