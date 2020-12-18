import React from 'react'
import './Input.scss'
import { MdSearch, MdFlag } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const Input = ({ inputType, inputRef, inputName, inputValue, inputPlaceHolder, inputOnChange} ) => (
  <div className="input__content">
    { inputName==="market-stall" && <MdSearch className="input__icon"/> }
    { inputName==="location" && <MdFlag /> }
    { inputName==="salary-range" && <FaMoneyBillWaveAlt /> }
    <input type={inputType} ref={inputRef} name={inputName} value={inputValue} placeholder={inputPlaceHolder} onChange={inputOnChange} className="input" />
  </div>
)

export default Input
