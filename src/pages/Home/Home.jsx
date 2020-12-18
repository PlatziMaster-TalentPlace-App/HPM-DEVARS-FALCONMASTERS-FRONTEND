import React from 'react'
import './Home.scss'
import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <div className="home">
      <Card career="FULLSTACK" image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" vacant="Desarrollador fullstack" salary="30,000" coin="MXN" title="POSTULARME" />
    </div>
  )
}

export default Home
