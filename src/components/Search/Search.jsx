import React from 'react'
import './Search.scss'
import Input from '../Input/Input'
import Select from '../Select/Select'
import Button from '../Button/Button'

const options = {
  locations: [
    {
      id: '1',
      name: 'México'
    },
    {
      id: '2',
      name: 'Colombia'
    },
    {
      id: '3',
      name: 'Estados Unidos'
    }
  ]
}

const Search = () => (
  <div className="search">
    <div className="search__block">
      <div>
        El empleo de tus sueños esta aquí
      </div>
      <div className="search__content">
        <Input inputType="text" inputName="market-stall" inputPlaceHolder="Puesto que desempeño" />
        <Select selectOptions={options.locations} selectName="location" selectPlaceHolder="Localidad" />
        <Input inputType="text" inputName="salary-range" inputPlaceHolder="Rango de salario" />
        <Button buttonTitle="Buscar"/>
      </div>
    </div>
  </div>
)

export default Search
