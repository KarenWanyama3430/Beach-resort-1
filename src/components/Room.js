import React from "react";
import { Link } from "react-router-dom";

const Room = (props) => {
  return (
    <article className="room">
      <div className="img-container">
        <img src={props.images[0]} alt={props.name} />
        <div className="price-top">
          <h6>${props.price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${props.slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>

      <p className="room-info">{props.name}</p>
    </article>
  );
};

export default Room;
