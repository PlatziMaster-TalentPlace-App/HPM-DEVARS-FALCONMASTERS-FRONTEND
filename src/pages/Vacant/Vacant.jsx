import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import "./Vacant.scss";

const options = {
  vacancies: [
    {
      id: 1,
      career: "FULLSTACK",
      name: "National Aeronautics and Space Administration",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
      vacant: "Desarrollador fullstack",
      salary: "30,000",
      coin: "MXN",
      status: "En proceso",
      details: {
        benefit: [
          "Beneficios",
          "Excelente ambiente de trabajo \n Contratación directa (100% nómina)",
        ],

        description: [
          "Descripción",
          "Forma parte un gran equipo de trabajo dentro de una Agencia de mercadotecnia y publicidad. Eres Diseñador gráfico con experiencia en diseño publicitario e identidad corporativa, con alto grado de conocimiento en edición fotográfica en Adobe Photoshop e ilustración en Adobe Illustrator, te estamos buscando",
        ],

        requirements: [
          "Requisitos",
          "Estudiar en Platzi Master",
          "Sexo: Indistinto",
          "Edad: Entre 23 a 35 años",
        ],
        aptitude: [
          "Aptitudes",
          "Creativo",
          "Trabajo en equipo",
          "Propositivo",
          "Ordenado",
          "Autocrítico",
          "Buen comunicador",
        ],
        skill: [
          "Habilidades",
          "Alto conocimiento y manejo de suite Adobe",
          "Desarrollo de diseño publicitario",
          "Conocimiento y adaptación en tendencias de diseño",
          "Excelente ortografía",
          "Administración del tiempo",
          "Conocimientos básicos en mercadotecnia",
        ],
        offer: [
          "Ofrecemos",
          "$100,000 MXN",
          "Vales de despensa",
          "Seguro de vida",
          "Seguro de gastos médicos",
        ],
      },
    },
  ],
};

const vacant = options.vacancies[0];

const Vacant = ({ cardWidth = "90%", cardHeight = "auto" }) => {
  return (
    <section className="vacanties__card">
      <Card cardHeight={cardHeight} cardWidth={cardWidth}>
        <section className="card__header">
          <div className="vacant__info">
            <h1 className="vacant__info--title">{vacant.career}</h1>
            <p className="vacant__info--subtitle">{vacant.vacant}</p>
            <p className="vacant__info--salary">
              ${vacant.salary} <span>{vacant.coin}</span>{" "}
            </p>
          </div>
          <div className="vacant__logo">
            <h3 className="vacant__logo--name">{vacant.name}</h3>
            <figure className="vacant__logo--img">
              <img src={vacant.urlImage} alt="" />
            </figure>
          </div>
        </section>
        <section className="card__details">
          <div className="card__details--col1">
            <h4 className="benefit__title">{vacant.details.benefit[0]}</h4>
            <p className="benefit__description body">
              {vacant.details.benefit[1]}
            </p>
            <h4 className="description__title">
              {vacant.details.description[0]}
            </h4>
            <p className="description__body body">
              {vacant.details.description[1]}
            </p>
            <h4 className="requirements__title">
              {vacant.details.requirements[0]}
            </h4>
            <div className="requirements__list body">
              <ul>
                {vacant.details.requirements
                  .filter((item, i) => i !== 0)
                  .map((item) => {
                    return <li>{item}</li>;
                  })}
              </ul>
            </div>
          </div>
          <div className="card__details--col2">
            <h4 className="aptitudes__title">{vacant.details.aptitude[0]}</h4>
            <div className="aptitudes__list body">
              <ul>
                {vacant.details.aptitude
                  .filter((item, i) => i !== 0)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
            <h4 className="skills__title">{vacant.details.skill[0]}</h4>
            <div className="skills_list body">
              <ul>
                {vacant.details.skill
                  .filter((item, i) => i !== 0)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
            <h4 className="offer__title">{vacant.details.offer[0]}</h4>
            <div className="offer__list body">
              <ul>
                {vacant.details.offer
                  .filter((item, i) => i !== 0)
                  .map((item) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="card__button">
          <Button buttonTitle="Postularme" />
          <p className="card__button--footer">
            Recibirás un correo de confirmación por parte de Shaily Zappa que te
            presentará con la empresa que te postulaste
          </p>
        </section>
      </Card>
    </section>
  );
};

export default Vacant;
