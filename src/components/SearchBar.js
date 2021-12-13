
import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"search coins"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

const BarStyling = {
  width: "40vw",
  background: "#000",
  border: "1px #888",
  padding: ".8rem",
  margin: "10px",
  textAlign: "center"

};

export default SearchBar