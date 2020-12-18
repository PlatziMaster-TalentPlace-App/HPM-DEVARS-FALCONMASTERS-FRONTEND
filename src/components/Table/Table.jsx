import React from 'react'
import './Table.scss'
import { BsChevronCompactDown } from "react-icons/bs";
import Card from '../Card/Card'
import List from '../List/List'

const Table = ({ title, options, buttonTitle }) => (
  <Card width="620px" height="460px">
    <header className="table__header">
      { title }
    </header>
    <section className="table__section">
      {
        options.map(option => (
          <List key={option.id} career={option.career} name={option.name} salary={option.salary} coin={option.coin} buttonTitle={buttonTitle} />
        ))
      }
    </section>
    <footer className="table__footer">
      VER MÁS
      <BsChevronCompactDown />
    </footer>
  </Card>
)

export default Table