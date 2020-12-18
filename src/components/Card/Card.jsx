import React from 'react'
import './Card.scss'

const Card = ({ children }) => (
  <article className="card__article">
    {children}
  </article>
)

export default Card
