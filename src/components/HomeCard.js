import React from "react";
import "./HomeCard.css";

function HomeCard({ imageUrl, title, text }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default HomeCard;
