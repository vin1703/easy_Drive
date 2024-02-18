import React from 'react'
import { Box,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {Button} from '@mui/material'
import { main_header_style,button_box,ty1,ty2,ty3} from './headerStyle'


function HeaderContent() {
  return (
    <Box sx={main_header_style}>
      <Typography sx={ty3}>Streamline Your Driving License Registration Experience.</Typography>
        <Typography style={ty2}>Register for your driving license from the comfort of your home.</Typography>
        <Typography style={ty1}>Speed Up Your Driving License Process !</Typography>
        
      
      <Box sx={button_box}>
        <Button ><b style={{fontSize:"20px"}}><Link style={{textDecoration:"none",backgroundColor:"#0a192f",border:"2px solid #fff",padding:"15px 45px 15px 45px",color:"#fff"}} to='/login'>Get Started</Link></b></Button>
       
      </Box>
    </Box>
  )
}

export default HeaderContent
