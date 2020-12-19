import React from 'react'
import './RegistrationVacancies.scss'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import Image from '../../components/Image/Image'
import Button from '../../components/Button/Button'
// import Axios from 'axios'

// const RegistrationVacancies = async () => {
const RegistrationVacancies = () => {

  // const url = "https://hpm-devars-falconmasters-backend.vercel.app/api/vacancies";
  // const body = {
  //   "idCompany": "NOMBRE DE LA COMPAÑIA",
  //   "branch": "BACKEND",
  //   "country": "México",
  //   "urlImage":
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1920px-Platzi.jpg",
  //   "position": "DESAROLLADOR FRONTEND",
  //   "salary": 100000,
  //   "coin": "MXN",
  //   "requirements": "Estudiar en Platzi Master",
  //   "skills": "Alto conocimiento y manejo de la suite de Adobe (Ilustrator, Photoshop, indesign, audiovisual). Desarrollo de diseño publicitario, identidad corporativa, packaging y para aplicaciones digitales (diseño web, redes sociales, apps). Conocimiento y adaptación en tendencias de diseño.Excelente ortografía.Administración del tiempo. Conocimientos básicos en Mercadotecnia",
  //   "details": "Forma parte un gran equipo de trabajo dentro de una Agencia de mercadotecnia y publicidad. Eres Diseñador gráfico con experiencia en diseño publicitario e identidad corporativa, con alto grado de conocimiento en edición fotográfica en Adobe Photoshop e ilustración en Adobe Illustrator, te estamos buscando",
  //   "tags": ["Fronted", "Ilustrator", "Photoshop", "Mercadotecnia", "diseño"],
  //   "emailBoss": "boss@company.com"
  // }
  // // headers = {
  // //   headers: { Authorization: `Bearer ${token}` },
  // // };
  // const result = await Axios.post(url, body);
  // console.log(result.status);

  return (
    <div className="registration__vacancies">
      <Card cardWidth="900px" cardHeight="auto">
        <header className="registration__vacancies__header">
          <div>
            ALTA DE VACANTES
          </div>
        </header>
        <section className="registration__vacancies__section">
          <div className="registration__vacancies__section__avatar">
            <div>
              <label>TITULO DEL PUESTO</label>
              <Input inputType="text" inputBorder="1px solid black" />
              <label>SUBTITULO DEL PUESTO (OPCIONAL)</label>
              <Input inputType="text" inputBorder="1px solid black" />
              <label>SALARIO OFRECIDO</label>
              <Input inputType="text" inputBorder="1px solid black" />
            </div>
            <div>
              <Image imgSrc="https://radiolaotra.com.ar/wp-content/uploads/2020/06/logo-platzi.jpg" imgAlt="Imagen de la Empresa" imgHeight="200px"/>
            </div>
          </div>
          <label>Descripcion</label>
          <textarea className="registration__vacancies__section__text" />
          <Button buttonTitle="ENVIAR"/>
        </section>
      </Card>
    </div>
  )
}

export default RegistrationVacancies