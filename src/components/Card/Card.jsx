import React from "react";
import "./Card.scss";

const Card = ({ children, cardWidth, cardHeight, cardMinWidth }) => (
  <article className="card__article" style={{width: cardWidth, height: cardHeight, minWidth:cardMinWidth }}>
    {children}
  </article>
);

export default Card;
