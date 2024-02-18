import React from 'react'
import { Box, Typography } from '@mui/material'
import { result_style,res_box,number_box } from './scoreCompStyle'
import { useAppContext } from '../../Context/Context'
export default function ScoreBox() {
  const {isSign} = useAppContext();
  return (
    <Box sx={result_style}>
      <Box sx={res_box}>
        <Typography color='#64ffda' variant='h2'>Score :</Typography>
      </Box>
      <Box sx={number_box}>
      <Typography color='#fff' variant='h1'>{isSign.score}/10</Typography>
      </Box>
    </Box>
  )
}
