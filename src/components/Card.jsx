import React from "react";
import locationIcon from "../assets/locartion.svg";

const Card = ({
  imageUrl,
  title,
  description,
  location,
  googleMapsUrl,
  startDate,
  endDate,
}) => {
  return (
    <div className="card">
      <img className="card_image" src={imageUrl} />
      <div className="card_content">
        <div className="card_header">
          <img className="location_icon" src={locationIcon}></img>
          <span className="location_text">{location}</span>
          <a
            className="view_on_maps"
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card_title">{title}</h2>
        <h3 className="card_dates">
          {startDate} - {endDate}
        </h3>
        <p className="card_description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
