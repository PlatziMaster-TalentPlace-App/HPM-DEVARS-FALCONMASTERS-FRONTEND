import React, {useState} from 'react'
import './Select.scss'
import { MdSearch, MdFlag } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const Select = ({ selectOptions, selectRef, selectName, searchText, selectPlaceHolder, selectOnChange} ) => {

    const [searchTextSalary, setSearchTextSalary] = useState('');
    console.log(searchTextSalary)

  return (<div className="select__content">
    { selectName==="market-stall" && <MdSearch className="select__icon"/> }
    { selectName==="location" && <MdFlag /> }
    { selectName==="salary-range" && <FaMoneyBillWaveAlt /> }
    <select 
        ref={selectRef} 
        name={selectName} 
        value={searchTextSalary} 
        placeholder={selectPlaceHolder}
        onChange={(e) =>{setSearchTextSalary(e.target.value);}} 
        className="select"
        required
        >
          <option value="">{selectPlaceHolder}</option>
        {selectOptions.map(option => (
          <option 
            key={option._id} 
            value={option.salary}>
              {option.salary} {option.coin}
          </option>
        ))}
    </select>
  </div>
)
}

export default Select