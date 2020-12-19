import React from 'react'
import './RegistrationVacancies.scss'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import Image from '../../components/Image/Image'
import Button from '../../components/Button/Button'

const RegistrationVacancies = () => {
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