import React from "react";
import "./Card.scss";

const Card = ({ children, cardWidth, cardHeight, cardMinWidth, cardBackgroundColor = "#fff" }) => (
  <article className="card__article" style={{width: cardWidth, height: cardHeight, minWidth: cardMinWidth, backgroundColor: cardBackgroundColor }}>
    {children}
  </article>
);

export default Card;
