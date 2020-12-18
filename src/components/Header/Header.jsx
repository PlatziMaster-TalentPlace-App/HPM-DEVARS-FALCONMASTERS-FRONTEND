import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import Logo from '../Logo/Logo';
import { RiDashboardLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdLocationSearching } from "react-icons/md";

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <figure className="header__logo">
                <Logo />
                </figure>
            </Link>
            <nav className="header__nav">
            <ul>
                <li>
                    <Link>
                        <i className="header__icons__dashboard"><RiDashboardLine/></i><span>Jobs</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="header__icons__search"><FaSearch/></i><span>Buscar</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <i className="header__icons__search"><MdLocationSearching/></i><span>Postulaciones</span>
                    </Link>
                </li>
            </ul>
            </nav>
            <Link to="" className="btn-session">
                <button className="btn btn-outline-light btn-sm">INICIAR SESIÓN</button>
            </Link>
        </header>
    )
}

export default Header
