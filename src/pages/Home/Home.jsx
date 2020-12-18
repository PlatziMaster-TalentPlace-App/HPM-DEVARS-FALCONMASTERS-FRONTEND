import React from 'react'
import './Home.scss'
import Carousel from '../../components/Carousel/Carousel'
import Table from '../../components/Table/Table'

const Home = () => {
  return (
    <div className="home">
      <Carousel title="NUEVAS VACANTES" />
      <Table title="VACANTES DISPONIBLES" />
    </div>
  )
}

export default Home
