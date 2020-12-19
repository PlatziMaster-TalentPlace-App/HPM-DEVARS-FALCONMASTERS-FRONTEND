import React, { useEffect, useState} from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./Vacant.scss";
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { Link } from "react-router-dom";

const Vacant = ({ cardWidth = "90%", cardHeight = "auto" }) => {
  const { id } = useParams();
  const [vacancies, setVacancies] = useState([])
  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const url = `https://hpm-devars-falconmasters-backend.vercel.app/api/vacancies/${id}`;
    const data = await Axios.get(url);
    setVacancies(data.data.data)
  }
  
  return (
    <section className="vacanties__card">
      <Card cardHeight={cardHeight} cardWidth={cardWidth}>
        <section className="card__header">
          <div className="vacant__info">
            <h1 className="vacant__info--title">{vacancies.branch}</h1>
            <p className="vacant__info--subtitle">{vacancies.position}</p>
            <p className="vacant__info--salary">
              ${vacancies.salary} <span>{vacancies.coin}</span>{" "}
            </p>
          </div>
          <div className="vacant__logo">
            <h3 className="vacant__logo--name">{vacancies.company}</h3>
            <figure className="vacant__logo--img">
              <img src={vacancies.urlImage} alt="" />
            </figure>
          </div>
        </section>
        <section className="card__details">
          <div className="card__details--col1">
            <h4 className="benefit__title">Beneficios</h4>
            <p className="benefit__description body">
              {vacancies.details}
            </p>
          </div>
          <div className="card__details--col2">
            <h4 className="skills__title">Skills</h4>
            <div className="skills_list body">
              {vacancies.skills}
            </div>
            <h4 className="offer__title">Ofrecemos</h4>
            <div className="offer__list body">
              <ul>
                <li>$ {vacancies.salary} {vacancies.coin}</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="card__button">
          <Link key={id} to={`/question/${id}`}>
            <Button buttonTitle="Postularme" />
          </Link>
          <p className="card__button--footer">
            Recibirás un correo de confirmación por parte de Shaily Zappa que te presentará con la empresa
            que te postulaste
          </p>
        </section>
      </Card>
    </section>
  );
};

export default Vacant;
