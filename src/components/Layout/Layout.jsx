
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

const Layout = ({children}) => (
        <div>
            <Header/>
                <section>
                    {children}
                </section>
            <Footer/>
        </div>
    )


export default Layout
