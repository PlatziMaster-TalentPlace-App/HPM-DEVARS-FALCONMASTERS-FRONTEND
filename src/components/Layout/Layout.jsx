import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Banner from '../Banner/Banner'
import Decoration from '../Decoration/Decoration'
import Footer from '../Footer/Footer'
import './Layout.scss'

const Layout = ({children}) => (
  <>
  <div className="layout">
    <Header/>
    <Search />
    <Banner ancho="100px"/>
    <section className="section-app">
      {children}
    </section>
    <Decoration/>
    <Footer/>
  </div>
    
  </>
)

export default Layout
