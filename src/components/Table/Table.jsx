import React from 'react'
import './Table.scss'
import Card from '../Card/Card'

const Table = ({ title }) => (
  <Card width="620px" height="460px">
    <header className="table__header">
      { title }
    </header>
    <section className="table__section">
      Lista
    </section>
    <footer className="table__footer">
      Ver mas...
    </footer>
  </Card>
)

export default Table