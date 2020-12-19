import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Decoration from '../Decoration/Decoration'
import Footer from '../Footer/Footer'
import './Layout.scss'

const Layout = ({children}) => (
  <>
  <div className="layout">
    <Header/>
    <Search />
    <section className="section-app">
      {children}
    </section>
    <Decoration/>
    <Footer/>
  </div>
    
  </>
)

export default Layout
