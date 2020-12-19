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
  const [searchText, setSeachText] = useState('');

    const handleSearch = async (value) => {
    const searchQuery = await api.get('music/search', {
      params: { search: value },
    });
    return searchQuery.data.data;
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
      console.log(searchText)
  };

  return (
    <div className="search">
    <div className="search__block">
      <div>
        El empleo de tus sueños esta aquí
      </div>
      <div >
        <form onSubmit={handleSearchSubmit}  className="search__content">
          <SelectDevelop 
              selectOptions={vacancies.data} 
              selectName="market-stall" 
              selectPlaceHolder="Mi puesto" 
              onSubmit={(e) =>{setSearchText(e.target.value);}} 
              />
          <SelectCountry selectOptions={vacancies.data} selectName="location" selectPlaceHolder="Localidad"  onChange={(e) =>{setSearchText(e.target.value);}}  />
          <SelectSalary selectOptions={vacancies.data} selectName="salary-range" selectPlaceHolder="Salario" onChange={(e) =>{setSearchText(e.target.value);}}  />
          <Button buttonTitle="Buscar"/>
        </form>
      </div>
    </div>
  </div>
  )
}
  

export default Search
