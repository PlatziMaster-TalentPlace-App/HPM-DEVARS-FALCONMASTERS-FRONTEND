import React from 'react'
import './Card.scss'
import Button from '../Button/Button'

const Card = ({ career, image, vacant, salary, coin, title } ) => (
  <article className="card__article">
    <header className="card__article__header">
      <span>{career}</span>
    </header>
    <section className="card__article__section">
      <img src={image} alt={vacant}/>
      <p>
        {vacant}
        <span>$ {salary} {coin}</span>
      </p>
    </section>
    <footer className="card__article__footer">
      <Button buttonTitle={title} buttonWidth="auto" buttonHeight="auto" buttonFontSize="0.6em" />
    </footer>
  </article>
)

export default Card
