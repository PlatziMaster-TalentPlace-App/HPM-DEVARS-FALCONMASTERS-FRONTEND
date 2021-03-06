import React from 'react'
import './List.scss'
import Label from '../Label/Label'
import Button from '../Button/Button'
import { CgCloseR } from "react-icons/cg";
import { FaGlassCheers } from "react-icons/fa";
import { MdSync } from 'react-icons/md'

const List = ({ application, career, name, salary, coin, status, buttonTitle, listGridTemplateColumns }) => (
    <div className={`list ${ status==='¡Te seleccionarón!' && 'list__selected' }`} style={{ gridTemplateColumns: listGridTemplateColumns }}>
      <Label career={career} />
      <div>{name}</div>
      { application !== 'true' ?
        <div>{`$ ${salary} ${coin}`}</div> 
        : 
        <div>
          { status==='En proceso' && <MdSync /> }
          { status==='Vacante cerrada' && <CgCloseR /> }
          { status==='¡Te seleccionarón!' && <FaGlassCheers /> }
          <span className="tooltiptext">{status}</span>
        </div>
      }
      { buttonTitle && <Button buttonTitle={buttonTitle} buttonWidth="auto" buttonHeight="auto" buttonFontSize="0.6em" /> }
    </div>
)

export default List