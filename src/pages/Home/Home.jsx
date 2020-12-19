<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
=======
import React, { useContext } from 'react'
>>>>>>> b551c6dd0eff6821c23ba61e69544c4a9b806cdd
import './Home.scss'
import Carousel from '../../components/Carousel/Carousel'
import Table from '../../components/Table/Table'
import Banner from '../../components/Banner/Banner'
import AppContext from '../../context/AppContext'

const Home = () => {
<<<<<<< HEAD

  const [jobVacancies, setJobVacancies] = useState([]);

  useEffect(() =>{
    fetch('https://hpm-devars-falconmasters-backend-1toe9ysiq.vercel.app//api/vacancies')
    .then( response => response.json())
    .then(data => setJobVacancies(data.results))
  },[])

=======
  const { vacancies } = useContext(AppContext)
>>>>>>> b551c6dd0eff6821c23ba61e69544c4a9b806cdd
  return (
    <div className="home">
      <Banner ancho="100px"/>
      <Carousel title="NUEVAS VACANTES" options={vacancies.data} buttonTitle="POSTULARME" />
      <div className="home__tables">
        <Table
          title="VACANTES DISPONIBLES"
          options={vacancies.data}
          buttonTitle="POSTULARME"
          listGridTemplateColumns="1fr 1fr 1fr 1fr"
        />
        <Table
          application="true"
          title="MIS ULTIMAS APLICACIONES"
          cardWidth="400px"
          options={vacancies.data}
          listGridTemplateColumns="1fr 1fr 1fr"
        />
      </div>
    </div>
  );
};

export default Home;
