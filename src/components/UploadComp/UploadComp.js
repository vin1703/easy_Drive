import React from 'react'
import { Box,Typography } from '@mui/material'
import { docs_style } from './uploadCompStyle'
import ProcessBox from '../HomeComp/ProcessBox'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {useLocation} from 'react-router-dom'
export default function UploadComp() {
  const location = useLocation();
  const getProfile = location.state.getProfile;
  return (
    <Box sx={docs_style}>
    <Typography sx={{margin:"20px 0 20px 0"}} variant='h3' color='#64ffda'>{getProfile?'Update':'Upload'} Documents </Typography> <br />
      <ProcessBox icon={UploadFileIcon} text='Add Profile Photo'/> <br />
      <ProcessBox icon={UploadFileIcon} text='Add Aadhar Card'/>  <br />
      <ProcessBox icon={UploadFileIcon} text='Add PAN Card'/> <br />
    </Box>
  )
}