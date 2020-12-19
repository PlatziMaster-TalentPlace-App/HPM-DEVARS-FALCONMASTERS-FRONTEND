import React, { useContext } from 'react'
import './Home.scss'
import Carousel from '../../components/Carousel/Carousel'
import Table from '../../components/Table/Table'
import Banner from '../../components/Banner/Banner'
import AppContext from '../../context/AppContext'

const Home = () => {
  const { vacancies } = useContext(AppContext)
  return (
    <div className="home">
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
