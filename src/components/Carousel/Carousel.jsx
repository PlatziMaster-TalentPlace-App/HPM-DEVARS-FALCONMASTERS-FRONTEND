import React from 'react'
import './Carousel.scss'
import NewVacancy from '../NewVacancy/NewVacancy'

<<<<<<< HEAD
const Carousel = ({title, options, buttonTitle, searchTextCountry, searchTextDevelop, searchTextSalary }) => {

//   console.log(options)
//  let filteredJobs = options.filter(jobs => {
//     return jobs.includes('Mexico'); }
//   );

  // const filteredData = useMemo(() =>
  //   products.filter(product => {
  //     return product.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || product.differential.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || product.code.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || product.date.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //   }),
  // [products, search]
  // )
  
  return (
    <div className="carousel">
        <div className="carousel__title">
          {title}
        </div>
        <div className="carousel__cards">
          {
            // filteredJobs
            options.map(option => (
              <NewVacancy key={option._id} career={option.branch} image={option.urlImage} vacant={option.position} salary={option.salary} coin={option.coin} buttonTitle={buttonTitle} />
            ))
          }
        </div>
=======
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
>>>>>>> 9568fdc37fb7d4ba1de05f52f3db7e4a4346ba6d
    </div>
  )
}
  

export default Carousel
