import React from 'react'
import { Box } from '@mui/material'

export default function LoginImage(props) {
  return (
    <Box sx={props.login_image}>
      <img style={{"height":"100%",width:"100%","object-fit":"contain"}}src={props.image} alt='' />
    </Box>
  )
}
