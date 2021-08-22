import React from "react";
import styles from './dropdown.module.css';
import { useState } from "react";

import { CaretDownOutlined } from '@ant-design/icons';

const Dropdown = (props) => {
  const options = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];

  const {
    dropDownLabel, handleOnSelect,
    position = 'side', labelStyle = {},
    dropDownStyle
  } = props;
  const [selectedOption, setSelectedOption] = useState('Karnataka');


  const oneSelectHandler = (e) => {
    const value = e.target.value;
    setSelectedOption(value)
    if (typeof handleOnSelect === 'function') {
      handleOnSelect(value);
    }
  }

  return (
    <div
      className={styles.dropDownTopContainer}
    >
      <select
        style={dropDownStyle}
        value={selectedOption} onChange={oneSelectHandler}
      >
        {
          options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
}
export default Dropdown