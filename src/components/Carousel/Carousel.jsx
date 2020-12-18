import React from 'react'
import './Carousel.scss'
import NewVacancy from '../NewVacancy/NewVacancy'

const Carousel = ({title}) => (
  <div className="carousel">
    <div className="carousel__title">
      {title}
    </div>
    <div className="carousel__cards">
      <NewVacancy career="FULLSTACK" image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" vacant="Desarrollador fullstack" salary="30,000" coin="MXN" title="POSTULARME" />
      <NewVacancy career="FRONTEND" image="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" vacant="Frontend developer" salary="8,000,000" coin="COP" title="POSTULARME" />
      <NewVacancy career="BACKEND" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/406px-Nintendo_red_logo.svg.png" vacant="Backend" salary="3,000" coin="DLL" title="POSTULARME" />
    </div>
  </div>
)

export default Carousel
