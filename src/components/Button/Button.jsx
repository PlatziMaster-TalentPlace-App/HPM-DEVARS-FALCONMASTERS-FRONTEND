import React from 'react'
import './Button.scss'

const Button = ({ buttonType, buttonOnClick } ) => (
  <button type={buttonType} onClick={buttonOnClick} className="button">
    Buscar
  </button>
)

export default Button
