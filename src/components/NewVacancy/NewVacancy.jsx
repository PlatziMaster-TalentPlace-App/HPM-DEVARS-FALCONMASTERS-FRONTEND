import React from 'react'
import './NewVacancy.scss'
import Card from '../Card/Card'
import Label from '../Label/Label'
import Image from '../Image/Image'
import Button from '../Button/Button'

const NewVacancy = ({ career, image, vacant, salary, coin, buttonTitle } ) => (
  <Card cardWidth="250px" cardHeight="300px" cardMinWidth="250px" >
    <div className="newvacancy">
        <header className="card__article__header">
        <Label career={career} />
      </header>
      <section className="card__article__section">
        <Image imgSrc={image} imgAlt={vacant} imgHeight="50px" />
        <p>
          {vacant}
          <span>$ {salary} {coin}</span>
        </p>
      </section>
      <footer className="card__article__footer">
        <Button buttonTitle={buttonTitle} buttonWidth="auto" buttonHeight="auto" buttonFontSize="0.6em" />
      </footer>
    </div>
    
  </Card>
)

export default NewVacancy
