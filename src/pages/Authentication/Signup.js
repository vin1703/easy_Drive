import React from 'react'
import { Box,} from '@mui/material'
import SignupForm from '../../components/AuthComp/SignupForm'
import LoginImage from '../../components/AuthComp/LoginImage'
import { login_image, main_login,login_form } from './login_style'

export default function Signup() {
  return (
    <>
    <Box sx={main_login}>
        <LoginImage login_image ={login_image} image="https://i.imgur.com/T2r8zyD.png"/>
        <SignupForm login_form={login_form}/>
    </Box>
    </>
  )
}
