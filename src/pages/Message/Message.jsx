import React, { useEffect, useState} from 'react'
import './Message.scss'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { Link } from "react-router-dom";

const Message = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([])
  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const url = `https://hpm-devars-falconmasters-backend.vercel.app/api/vacancies/${id}`;
    const data = await Axios.get(url);
    setMessages(data.data.data)
  }

  return (
    <div className="message__vacancies">
      <Card cardWidth="900px" cardHeight="auto">
        <section className="message__vacancies__section">
          <div className="message__vacancies__section__message">¡Felicidades! te has postulado con éxito en la vacante <span className="message__vacancies__section__message__span">{messages.position}</span> de <span className="message__vacancies__section__message__span">{messages.company}</span>, un coach lo revisara en breve.</div>
          <Link key={id} to={`/`}>
            <Button buttonTitle="CERRAR"/>
          </Link>
        </section>
      </Card>
    </div>
  )
}

export default Message