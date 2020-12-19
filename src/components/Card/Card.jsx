import React from "react";
import "./Card.scss";

const Card = ({ children, cardWidth, cardHeight }) => (
  <article
    className="card__article"
    style={{ width: cardWidth, height: cardHeight }}
  >
    {children}
  </article>
);

export default Card;
