import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  const [experiences, setExperiences] = useState(false);
  const [places, setPlaces] = useState(true);
  return (
    <div className="search">
      <div className="togglers">
        <h2
          onClick={() => {
            setPlaces(true);
            setExperiences(false);
          }}
        >
          Places to stay
        </h2>
        <h2
          onClick={() => {
            setPlaces(false);
            setExperiences(true);
          }}
        >
          Experiences
        </h2>
        <h2>Online Experiences</h2>
      </div>
      <div className="toggler__open">
        {places && (
          <form>
            <div>
              <label>Location</label>
              <input type="text" placeholder="Where are you going?" />
            </div>
            <div className="split">
              <label>Check in</label>
              <input type="text" placeholder="Add dates" />
            </div>
            <div className="split">
              <label>Check out</label>
              <input type="text" placeholder="Add dates" />
            </div>
            <div className="split">
              <label>Guests</label>
              <input type="text" placeholder="Add guests" />
            </div>
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        )}
        {experiences && (
          <form>
            <div>
              <label>Location</label>
              <input type="text" placeholder="Where are you going?" />
            </div>
            <div className="split">
              <label>Date</label>
              <input type="text" placeholder="Add dates" />
            </div>
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Search;
