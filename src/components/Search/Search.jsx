import React, { useContext, useState } from 'react'
import './Search.scss'
import Input from '../Input/Input'
import SelectCountry from '../Select/SelectCountry'
import SelectDevelop from '../Select/SelectDevelop'
import SelectSalary from '../Select/SelectSalary'
import Button from '../Button/Button'
import AppContext from '../../context/AppContext'


const Search = () => {
  const { vacancies } = useContext(AppContext)

  return (
    <div className="search">
    <div className="search__block">
      <div>
        El empleo de tus sueños esta aquí
      </div>
      <div >
        <form className="search__content">
          <SelectDevelop 
              selectOptions={vacancies.data} 
              selectName="market-stall" 
              selectPlaceHolder="Mi puesto"
              />
          <SelectCountry 
              selectOptions={vacancies.data} 
              selectName="location" 
              selectPlaceHolder="Localidad"  
              />
          <SelectSalary 
              selectOptions={vacancies.data} 
              selectName="salary-range" 
              selectPlaceHolder="Salario" 
              />
          <Button buttonTitle="Buscar"/>
        </form>
      </div>
    </div>
  </div>
  )
}
  

export default Search
