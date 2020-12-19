import React from 'react'
import './Login.scss'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'

const Login = () => {
  return(
    <Card cardWidth="400px" cardHeight="300px" cardBackgroundColor="#98ca3f">
      <div className="login">
        <Logo />
        <Input inputType="text" inputName="user" inputPlaceHolder="USUARIO" />
        <Input inputType="password" inputName="password" inputPlaceHolder="CONTRASEÑA" />
        <Button buttonTitle="INGRESAR"/>
      </div>
    </Card>
  )
}

export default Login