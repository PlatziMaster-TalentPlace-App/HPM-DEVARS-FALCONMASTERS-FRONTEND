import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'
import './Layout.scss'

const Layout = ({children}) => (
  <>
    <Header/>
    <Search />
    <section className="layout">
      {children}
    </section>
    <Footer/>
  </>
)

export default Layout
