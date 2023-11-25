import React, { useState } from "react";
import "./Form.css";
import ShowFormData from "./ShowFormData";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriedStatus: false,
    gender: "",
  });
  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({ ...prevState, [name]: checked }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <div>
      <div>
        <h1>React Form Assignment</h1>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            
          />

          {/* Last Name */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            
          />

          {/* Phone number */}
          <input
            type="number"
            name="phNumber"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          {/* Country Select Tag */}
          <select name="country" onChange={handleChange}>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="Russia">Russia</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            {/* ... other country options ... */}
          </select>

          {/* Birth Date Selector */}
          <input type="date" name="birthDate" onChange={handleChange} value={formData.birthDate} />

          {/* Profile Pic Selector */}
          <input type="file" name="avatar" onChange={handleChange} value={formData.avatar} />

          {/* Married Status Selector */}
          <label>
            Married:
            <input
              type="checkbox"
              name="marriedStatus"
              onChange={handleChange}
            />
          </label>

          {/* Gender Selector */}
          <label>
            Male:
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
          </label>
          <label>
            Female:
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
          </label>
          <label>
            Other:
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />
          </label>

          {/* Submit Button - input type submit */}
          <input type="submit"/>
        </form>

        {/* if form submitted then show ShowFormData component here */}
        {showData && <ShowFormData data={formData} />}
      </div>
    </div>
  );
}

export default Form;
