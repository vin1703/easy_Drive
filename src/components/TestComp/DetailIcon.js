import EditNoteIcon from '@mui/icons-material/EditNote';
import React from 'react'
import { Box,Typography } from '@mui/material'
import { detail_icon_style,details_text, start_test } from './testCompStyle';
import { Link } from 'react-router-dom';
export default function DetailIcon() {
  return (
    <>
    <Box sx={detail_icon_style}>
      <EditNoteIcon sx={{fontSize:"400px",color:"#fff"}}/>
    </Box>
    <Box sx={details_text}>
        <Typography variant='h2' color={"#64ffda"}>Online Driving Test</Typography> 
        <Typography variant='h5' color={"#ccd6f6"}>Once you start do not close the tab !</Typography> <br /> <br />
        <Typography variant='h6' color={"#8892b0"}>1. The test will last for 30 minutes.</Typography>
        <Typography variant='h6' color={"#8892b0"}>2. Read questions carefully before choosing any option.</Typography>
        <Typography variant='h6' color={"#8892b0"}>3. The test consists of 10 multiple-choice questions.</Typography> <br />
        <Link to='/test' style={start_test}>START</Link>
    </Box>
    </>
  )
}