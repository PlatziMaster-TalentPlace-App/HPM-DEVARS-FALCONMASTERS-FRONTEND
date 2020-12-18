import React from 'react'
import './Select.scss'
import { MdSearch, MdFlag } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const Select = ({ selectOptions, selectRef, selectName, selectValue, selectPlaceHolder, selectOnChange} ) => (
  <div className="select__content">
    { selectName==="market-stall" && <MdSearch className="select__icon"/> }
    { selectName==="location" && <MdFlag /> }
    { selectName==="salary-range" && <FaMoneyBillWaveAlt /> }
    <select ref={selectRef} name={selectName} value={selectValue} placeholder={selectPlaceHolder} onChange={selectOnChange} className="select" >
      {selectOptions.map(option => (
        <option key={option.id} value={option.name}>{option.name}</option>
      ))}
    </select>
  </div>
)

export default Select