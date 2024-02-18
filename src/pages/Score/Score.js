import React from 'react'
import { Box } from '@mui/material'
import { scoreStyle } from './scoreStyle'
import ScoreComp from '../../components/ScoreComp/ScoreComp'


export default function Score() {

  return (
    <Box sx={scoreStyle}>
      <ScoreComp/>
    </Box>
  )
}
