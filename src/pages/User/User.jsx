import React from 'react'
import './User.scss'
import Card from '../../components/Card/Card'
import Label from '../../components/Label/Label'
import Button from '../../components/Button/Button'
import { MdAccountCircle } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdLens, MdPanoramaFishEye } from 'react-icons/md'

const User = () => {
  const optionsSkills = {
    skills: [
      {
        id: 1,
        name: 'REACTJS'
      },
      {
        id: 2,
        name: 'NODEJS'
      },
      {
        id: 3,
        name: 'NEXTJS'
      },
      {
        id: 4,
        name: 'HTML'
      },
      {
        id: 5,
        name: 'CSS'
      },
      {
        id: 6,
        name: 'SQL'
      }
    ]
  }
  
  const optionsLanguages = {
    languages: [
      {
        id: 1,
        name: 'ESPAÑOL'
      },
      {
        id: 2,
        name: 'ENGLISH'
      }
    ]
  }

  const optionsTracing = {
    tracings: [
      {
        userId: "1",
        name: "Terminar Learning Path",
        description: "Durante los 3 meses intensivos se debera de terminar el Learning Path asignado por tu coach.",
        endDate: "14/04/2020",
        checked: true
      },
      {
          userId: "2",
          name: "Realiza tu proyecto",
          description: "Has pasado tu etapa intensiva, ahora es necesario poner en practica todo lo que sabes mediante un proyecto en equipo.",
          endDate: "10/06/2020",
          checked: true
      },
      {
          userId: "3",
          name: "Prepara tu CV y LinkendIn.",
          description: "La etapa productiva comienza ahora, es tiempo de estar preparado.",
          endDate: "29/07/2020",
          checked: true
      },
      {
          userId: "4",
          name: "Obten tu primer empleo",
          description: "Felicidades haz alcanzado tu primer empleo con Platzi Master.",
          endDate: "30/12/2020",
          checked: false
      },
      {
          userId: "5",
          name: "Mejora tu Ingles",
          description: "Da el siguiente paso aprendiendo ingles.",
          endDate: "06/06/2021",
          checked: false
      },
      {
          userId: "6",
          name: "Mejorar Pruebas Unitarias",
          description: "Las pruebas unitarias",
          endDate: "20/12/2022",
          checked: false
      },
      {
          userId: "7",
          name: "Aprender una plataforma en la nube",
          description: "Se realizara la ruta de AWS para mejorar el perfil profesional.",
          endDate: "20/04/2023",
          checked: false
      },
      {
          userId: "8",
          name: "Mejora tu empleo",
          description: "Despues de tanto esfuerzo ya es momento de buscar algo mejor.",
          endDate: "01/01/2024",
          checked: false
      }
    ]
  }

  return (
    <div className="user">
      <Card cardWidth="100%" cardHeight="auto">
        <header className="user__header">
          <div>
            CURRICULUM
          </div>
          <div className="user__header__user">
            Pedro Omar Cruz May
            <span>
              Frontend Developer
            </span>
          </div>
          <div className="user__header__avatar">
            <MdAccountCircle style={{ width: '2em', height: '2em' }}/>
          </div>
        </header>
        <section className="user__section">
          <div className="user__section__skills">
            <div className="user__section__skills__title">SKILLS</div>
            <div className="user__section__skills__options">
              {
                optionsSkills.skills.map(skill => (
                  <Label key={skill.id} career={skill.name}/>
                ))
              }
            </div>
          </div>
          <div className="user__section__languages">
            <div className="user__section__languages__title">SKILLS</div>
            <div className="user__section__languages__options">
              {
                optionsLanguages.languages.map(language => (
                  <Label key={language.id} career={language.name}/>
                ))
              }
            </div>
          </div>
        </section>
      </Card>
      <Card cardWidth="100%" cardHeight="auto">
        <header className="user__header">
          EXPERIENCIA LABORAL
        </header>
        <section className="user__section">
          <div className="user__section__experience">
            <div className="user__section__experience__title">2019 - Al día de hoy:</div>
            <div className="user__section__experience__experience">
              <span>Platzi master</span>
              Quisque interdum libero eget vestibulum placerat. Maecenas dapibus mauris id tellus gravida dignissim. Integer pretium convallis leo, tincidunt viverra purus posuere in. Donec consequat consectetur augue semper rutrum.
            </div>
          </div>
        </section>
      </Card>
      <Card cardWidth="100%" cardHeight="auto">
        <header className="user__header">
          EDUCACIÓN
        </header>
        <section className="user__section">
          <div className="user__section__education">
            <div className="user__section__education__title">2019 - Al día de hoy:</div>
            <div className="user__section__education__experience">
              <span>Platzi master</span>
              Quisque interdum libero eget vestibulum placerat. Maecenas dapibus mauris id tellus gravida dignissim. Integer pretium convallis leo, tincidunt viverra purus posuere in. Donec consequat consectetur augue semper rutrum.
            </div>
          </div>
        </section>
      </Card>
      <Card cardWidth="100%" cardHeight="auto">
        <div className="user__contact">
          <Button buttonTitle="SUBIR CURRICULUM" buttonWidth="auto" buttonHeight="auto" />
          <div className="user__contact__social">
            <AiFillGithub />
            Mi link de Github
          </div>
          <div className="user__contact__social">
            <AiFillLinkedin />
            Mi link de linkedin
          </div>
        </div>
      </Card>
      <Card cardWidth="100%" cardHeight="auto">
        <header className="user__header">
          SEGUIMIENTO DE PLATZI MASTER
        </header>
        {
          optionsTracing.tracings.map(tracing => (
            <div key={tracing.userId} className="user__tracing">
              {
                tracing.checked ?
                <MdLens />
                :
                <MdPanoramaFishEye />
              } 
              <div>
                {tracing.endDate} - {tracing.name} - {tracing.description}
              </div>
            </div>
          ))
        }
      </Card>
    </div>
  )
}

export default User