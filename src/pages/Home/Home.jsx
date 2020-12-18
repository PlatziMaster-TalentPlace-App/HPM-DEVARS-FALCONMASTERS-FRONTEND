import React from 'react'
import './Home.scss'
import Carousel from '../../components/Carousel/Carousel'
import Table from '../../components/Table/Table'

const options = {
  vacancies: [
    {
      id: 1,
      career: 'FULLSTACK',
      name: 'NASA',
      urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png',
      vacant: 'Desarrollador fullstack',
      salary: '30,000',
      coin: 'MXN'
    },
    {
      id: 2,
      career: 'FRONTEND',
      name: 'IBM DE MÉXICO',
      urlImage: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      vacant: 'Frontend developer',
      salary: '8,000,000',
      coin: 'COP'
    },
    {
      id: 3,
      career: 'BACKEND',
      name: 'NINTENDO',
      urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/406px-Nintendo_red_logo.svg.png',
      vacant: 'Backend',
      salary: '3,000',
      coin: 'DLL'
    }
  ]
}

const Home = () => {
  return (
    <div className="home">
      <Carousel title="NUEVAS VACANTES" options={options.vacancies} buttonTitle="POSTULARME" />
      <Table title="VACANTES DISPONIBLES" options={options.vacancies} buttonTitle="POSTULARME" />
    </div>
  )
}

export default Home
