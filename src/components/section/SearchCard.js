import React from "react";
import "./SearchCard.css";

function SearchCard() {
  return (
    <div className="search__card">
      <div className="card__left">
        <img
          src="https://a0.muscache.com/im/pictures/dde58d06-fb4d-432d-a8f2-9b4f6ae24c01.jpg?aki_policy=x_large"
          alt=""
        />
      </div>
      <div className="card__right">
        <div className="card__topic">
          <p className="desc">Entire apartment in midtown</p>
          <h2 className="tagline">
            Lovely Studio in midtown East w/ Gym Near metro
          </h2>
          <div className="room__snippet">
            <p>2 guests</p>
            <p>&middot;</p>
            <p>Studio</p>
            <p>&middot;</p>
            <p>1 bed</p>
            <p>&middot;</p>
            <p>1 bath</p>
          </div>
          <div className="room__access">
            <p>Wifi</p>
            <p>&middot;</p>
            <p>Kitchen</p>
          </div>
          <div className="room__duration">
            <p>Sep 7 - Oct 24</p>
          </div>
          <div className="room__fee">
            <p className="former__price">$5,226</p>
            <p className="new__price">$3920</p>
            <p className=""> / month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
