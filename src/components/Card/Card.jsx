import React from 'react'
import './Card.scss'

const Card = ({ children, width, height }) => (
  <article className="card__article" style={{width: width, height: height}}>
    {children}
  </article>
)

export default Card
