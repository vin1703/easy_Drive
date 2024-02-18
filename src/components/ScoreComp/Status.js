import React from 'react'
import { Box,Typography } from '@mui/material'
import { status_box } from './scoreCompStyle'
import { useAppContext } from '../../Context/Context';

export default function ScoreBox(props) {
  const {score} = useAppContext();
  return (
    <Box sx={status_box}>
    <Typography color='#64ffda' variant='h2'>{score<8 ?props.greet:"Congratulations !"}</Typography> <br />
    <Typography color='#fff' variant='h3'>Status : {score<8?props.st:"passed"}</Typography>
    </Box>
  )
}