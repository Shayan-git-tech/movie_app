import React from "react";
import searchIcon from "../assets/Images/search.svg";
function Search({searchTerm, setSearchTerm}) {

  return (
    <div className="search">
      <div>
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
