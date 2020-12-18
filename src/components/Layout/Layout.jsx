import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import './Layout.scss'

const Layout = ({children}) => (
  <>
  <div className="layout">
    <Header/>
    <Search />
    <section className="section_app">
      {children}
    </section>
    <Footer/>
  </div>
    
  </>
)

export default Layout
