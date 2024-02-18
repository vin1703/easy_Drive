import React from 'react'
import { Box,Typography } from '@mui/material'
import { image_style,image,sts } from './profileCompStyle'
import { useAppContext } from '../../Context/Context'

export default function ImageProfile() {
  const {isSign} = useAppContext();
  return (
    <Box sx={image_style}>
        <Box sx={image}>
        <img style={{height:"100%",width:"100%",objectFit:"contain"}} src={isSign.photoURL!=='_'?isSign.photoURL:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="profile" />
        </Box>
        <Box sx={sts}>
            <Typography variant='h5' color='white'>Status : {isSign?isSign.status:"Unknown"}</Typography>
        </Box>
      
    </Box>
  )
}
