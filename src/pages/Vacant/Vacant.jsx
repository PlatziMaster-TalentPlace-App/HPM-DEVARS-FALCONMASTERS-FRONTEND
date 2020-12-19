import React, {useContext} from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./Vacant.scss";
import Axios from 'axios'

const Vacant = async ({ detailId, cardWidth = "90%", cardHeight = "auto" }) => {
  const url = `https://hpm-devars-falconmasters-backend.vercel.app/api/vacancies/${detailId}`;
  const result = await Axios.get(url);
  console.log(result)
  const vacancies = result.data.data;
  const isEmpty = vacancies.length;
  return (
    // <section className="vacanties__card">
    //   <Card cardHeight={cardHeight} cardWidth={cardWidth}>
    //     <section className="card__header">
    //       <div className="vacant__info">
    //         <h1 className="vacant__info--title">{vacant.career}</h1>
    //         <p className="vacant__info--subtitle">{vacant.vacant}</p>
    //         <p className="vacant__info--salary">
    //           ${vacant.salary} <span>{vacant.coin}</span>{" "}
    //         </p>
    //       </div>
    //       <div className="vacant__logo">
    //         <h3 className="vacant__logo--name">{vacant.name}</h3>
    //         <figure className="vacant__logo--img">
    //           <img src={vacant.urlImage} alt="" />
    //         </figure>
    //       </div>
    //     </section>
    //     <section className="card__details">
    //       <div className="card__details--col1">
    //         <h4 className="benefit__title">{vacant.details.benefit[0]}</h4>
    //         <p className="benefit__description body">
    //           {vacant.details.benefit[1]}
    //         </p>
    //         <h4 className="description__title">
    //           {vacant.details.description[0]}
    //         </h4>
    //         <p className="description__body body">
    //           {vacant.details.description[1]}
    //         </p>
    //         <h4 className="requirements__title">
    //           {vacant.details.requirements[0]}
    //         </h4>
    //         <div className="requirements__list body">
    //           <ul>
    //             {vacant.details.requirements
    //               .filter((item, i) => i !== 0)
    //               .map((item) => {
    //                 return <li>{item}</li>;
    //               })}
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="card__details--col2">
    //         <h4 className="aptitudes__title">{vacant.details.aptitude[0]}</h4>
    //         <div className="aptitudes__list body">
    //           <ul>
    //             {vacant.details.aptitude
    //               .filter((item, i) => i !== 0)
    //               .map((item) => (
    //                 <li>{item}</li>
    //               ))}
    //           </ul>
    //         </div>
    //         <h4 className="skills__title">{vacant.details.skill[0]}</h4>
    //         <div className="skills_list body">
    //           <ul>
    //             {vacant.details.skill
    //               .filter((item, i) => i !== 0)
    //               .map((item) => (
    //                 <li>{item}</li>
    //               ))}
    //           </ul>
    //         </div>
    //         <h4 className="offer__title">{vacant.details.offer[0]}</h4>
    //         <div className="offer__list body">
    //           <ul>
    //             {vacant.details.offer
    //               .filter((item, i) => i !== 0)
    //               .map((item) => (
    //                 <li>{item}</li>
    //               ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="card__button">
    //       <Button buttonTitle="Postularme" />
    //       <p className="card__button--footer">
    //         Recibirás un correo de confirmación por parte de Shaily Zappa que te
    //         presentará con la empresa que te postulaste
    //       </p>
    <>
      {isEmpty > 0 ? (
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
              <Button buttonTitle="Postularme" />
              <p className="card__button--footer">
                Recibirás un correo de confirmación por parte de Shaily Zappa que te presentará con la empresa
                que te postulaste
              </p>
            </section>
          </Card>
        </section>
      ) : <h1>Cargando...</h1>}
    </>
  );
};

export default Vacant;
