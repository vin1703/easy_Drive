import React from 'react'
import { Box,} from '@mui/material'
import LoginForm from '../../components/AuthComp/LoginForm'
import LoginImage from '../../components/AuthComp/LoginImage'
import { login_image, main_login,login_form } from './login_style'

export default function Login() {
  return (
    <>
    <Box sx={main_login}>
        <LoginImage login_image ={login_image} image="https://i.imgur.com/fs50fEE.png"/>
        <LoginForm login_form={login_form}/>
    </Box>
    </>
  )
}
