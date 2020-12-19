import React, {useState} from 'react'
import './Select.scss'
import { MdSearch, MdFlag } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const Select = ({ selectOptions, selectRef, selectName, selectPlaceHolder} ) => {

  const [searchTextCountry, setSearchTextCountry] = useState('');
  
  console.log(searchTextCountry)

  return (<div className="select__content">
    { selectName==="market-stall" && <MdSearch className="select__icon"/> }
    { selectName==="location" && <MdFlag /> }
    { selectName==="salary-range" && <FaMoneyBillWaveAlt /> }
    <select 
        ref={selectRef} 
        name={selectName} 
        value={searchTextCountry}
        placeholder={selectPlaceHolder} 
        className="select" 
        onChange={(e) =>{setSearchTextCountry(e.target.value);}}  
        required
        >
          <option value="">{selectPlaceHolder}</option>
        {selectOptions.map(option => (
          <option 
            key={option._id} 
            value={option.country}>
              {option.country}
          </option>
        ))}
    </select>
  </div>
)
}

export default Select