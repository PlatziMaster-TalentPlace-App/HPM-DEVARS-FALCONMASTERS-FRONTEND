import React from 'react'
import './User.scss'
import Card from '../../components/Card/Card'
import Label from '../../components/Label/Label'
import Button from '../../components/Button/Button'
import { MdAccountCircle } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

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
    </div>
  )
}

export default User