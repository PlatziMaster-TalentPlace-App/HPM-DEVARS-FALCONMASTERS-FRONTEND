import React from 'react'
import './Carousel.scss'
import Card from '../Card/Card'

const Carousel = () => (
  <>
    <div className="carousel__title">
      NUEVAS VACANTES
    </div>
    <div className="carousel">
      <Card career="FULLSTACK" image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" vacant="Desarrollador fullstack" salary="30,000" coin="MXN" title="POSTULARME" />
      <Card career="FRONTEND" image="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" vacant="Frontend developer" salary="8,000,000" coin="COP" title="POSTULARME" />
      <Card career="BACKEND" image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/406px-Nintendo_red_logo.svg.png" vacant="Backend" salary="3,000" coin="DLL" title="POSTULARME" />
    </div>
  </>
)

export default Carousel
