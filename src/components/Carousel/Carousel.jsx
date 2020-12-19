import React from 'react'
import './Carousel.scss'
import NewVacancy from '../NewVacancy/NewVacancy'

const Carousel = ({title, options, buttonTitle}) => (
  <div className="carousel">
    <div className="carousel__title">
      {title}
    </div>
    <div className="carousel__cards">
      {
        options.map(option => (
          <NewVacancy key={option._id} id={option._id} career={option.branch} image={option.urlImage} vacant={option.position} salary={option.salary} coin={option.coin} buttonTitle={buttonTitle} />
        ))
      }
    </div>
  </div>
)

export default Carousel
