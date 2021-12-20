
import React from 'react';

const SearchBar = ({ keyword, handleSearch }) => {

  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"crypto search"}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

const BarStyling = {
  height: "40px",
  width: "400px",
  color: "#CCC",
  background: "#000",
  padding: "1rem",
  margin: "10px",
  textAlign: "center",
  fontSize: "20px",
  border: `1px solid #222`,
};

export default SearchBar