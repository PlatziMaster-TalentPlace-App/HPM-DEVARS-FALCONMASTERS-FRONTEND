import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import Logo from '../Logo/Logo';
import { MdAccountCircle, MdNotifications } from "react-icons/md";

const Header = ({ login = true }) => {
    return (
        <header className="header">
            <Link to="/">
                <figure className="header__logo">
                <Logo />
                </figure>
            </Link>
            <div className="header__main">
              <div >
                {
                  !login ?
                  <Link to="/" className="btn-session">
                      <button className="btn btn-outline-light btn-sm">INICIAR SESIÓN</button>
                  </Link>
                  :
                  <Link to="/">
                    <div className="header__avatar">
                      <div className="header__avatar__user">
                        <span className="header__avatar__user__name">USUARIO</span>
                        <span className="header__avatar__user__career">FRONTEND DEVELOPER</span>
                      </div>
                      <i className="header__avatar__icons__dashboard">
                        <MdAccountCircle />
                      </i>
                    </div>
                  </Link>
                }
              </div>
              {
                login &&
                  <Link to="/">
                    <i className="header__avatar__icons__dashboard">
                      <MdNotifications />
                    </i>
                  </Link>
              }
            </div>
        </header>
    )
}

export default Header
