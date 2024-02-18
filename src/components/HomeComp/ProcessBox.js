import React from 'react'
import { Box,Typography } from '@mui/material'
import { main_box,head_box } from './processStyle'
function ProcessBox(props) {
  return (
    
    <Box sx={head_box}>
        <Box sx={main_box}> 
        <props.icon sx={{fontSize:"250px",color:"#fff"}}/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center"}}>
        <Typography variant='h5' color='white'>{props.text}</Typography>
        </Box>
        
      
    </Box>
  )
}

export default ProcessBox
