import React, { useEffect, useState} from 'react'
import './Question.scss'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { Link } from "react-router-dom";

const Question = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const url = `https://hpm-devars-falconmasters-backend.vercel.app/api/vacancies/${id}`;
    const data = await Axios.get(url);
    setQuestions(data.data.data)
  }

  return (
    <div className="question__vacancies">
      <Card cardWidth="900px" cardHeight="auto">
        <header className="question__vacancies__header">
          <div>
            POSTULACION DE VACANTE
          </div>
        </header>
        <section className="question__vacancies__section">
          <div>EL CONTRATANTE QUIERE HACERTE UNA PREGUNTA</div>
          <label>{questions.applicantQuestion}</label>
          <textarea className="question__vacancies__section__text" />
          <div className="question__vacancies__section__buttons">
            <div className="question__vacancies__section__button">
              <Button buttonTitle="SUBIR CURRICULUM"/>
            </div>
            <div className="question__vacancies__section__button">
              <Link key={id} to={`/message/${id}`}>
                <Button buttonTitle="ENVIAR"/>
              </Link>
            </div>
          </div>
        </section>
      </Card>
    </div>
  )
}

export default Question