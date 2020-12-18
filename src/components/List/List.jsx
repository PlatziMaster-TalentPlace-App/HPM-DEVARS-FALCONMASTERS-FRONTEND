import React from 'react'
import './List.scss'
import Label from '../Label/Label'
import Button from '../Button/Button'

const List = ({ career, name, salary, coin, buttonTitle }) => (
  <div className="list">
    <Label career={career} />
    <div>{name}</div>
    <div>{`$ ${salary} ${coin}`}</div>
    <Button buttonTitle={buttonTitle} buttonWidth="auto" buttonHeight="auto" buttonFontSize="0.6em" />
  </div>
)

export default List