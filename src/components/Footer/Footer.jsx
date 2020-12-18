import React from 'react'
import './Footer.scss'
import Logo from '../Logo/Logo';

const Footer = () => (
    <footer className="footer">
        <div className="header__line"/>
        <h1>PLATZI INC. TODOS LOS DERECHOS RESERVADOS. PLATAFORMA PARA USO INTERNO.</h1>
        <figure className="header__logo">
            <Logo />
        </figure>
    </footer>
)

export default Footer
