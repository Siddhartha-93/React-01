import React from "react";
import "./ShowFormData.css";

const ShowFormData = ({ data }) => {
  return (
    <div>
      <h1>Form Data</h1>

      <h3 data-cy="first-name">First Name: {data.firstName}</h3>

      <h3 data-cy="last-name">Last Name: {data.lastName}</h3>

      <h3 data-cy="email">Email: {data.email}</h3>

      <h3 data-cy="password">Password: {data.password}</h3>

      <h3 data-cy="phNumber">Phone: {data.phNumber}</h3>

      <h3 data-cy="country">Country: {data.country}</h3>

      <h3 data-cy="birth-date">Birth Date: {data.birthDate}</h3>

      <h3 data-cy="marriage-status">Married: {data.marriedStatus ? "Yes" : "No"}</h3>

      <h3 data-cy="image-url">Image URL: {data.avatar}</h3> {/* NOTE: You might need a more elaborate method to show the image. Right now, this will just show the path. */}

      <h3 data-cy="gender">Gender: {data.gender}</h3>
    </div>
  );
};

export default ShowFormData;
