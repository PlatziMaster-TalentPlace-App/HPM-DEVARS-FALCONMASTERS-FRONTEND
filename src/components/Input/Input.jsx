import React from 'react'
import './Input.scss'
import { AiOutlineUser } from "react-icons/ai"
import { MdSearch, MdFlag } from "react-icons/md";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri"

const Input = ({ inputType, inputRef, inputName, inputValue, inputPlaceHolder, inputOnChange, inputBorder = ''} ) => (
  <div className="input__content">
    { inputName==="market-stall" && <MdSearch className="input__icon"/> }
    { inputName==="location" && <MdFlag /> }
    { inputName==="salary-range" && <FaMoneyBillWaveAlt /> }
    { inputName==="user" && <AiOutlineUser />}
    { inputName==="password" && <RiLockPasswordLine />}
    <input type={inputType} ref={inputRef} name={inputName} value={inputValue} placeholder={inputPlaceHolder} onChange={inputOnChange} className="input" style={{ border: inputBorder }}/>
  </div>
)

export default Input
