import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchScroll.css";

function SearchScroll() {
  return (
    <div className="navbar__middlewhite">
      <input type="text" placeholder="Start your search" />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchScroll;
