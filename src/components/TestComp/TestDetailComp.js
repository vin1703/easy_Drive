import React from 'react'
import { Box } from '@mui/material'
import { detail_comp } from './testCompStyle'
import DetailIcon from './DetailIcon'

export default function TestDetailComp () {
  return (
    <Box sx={detail_comp}>
      <DetailIcon/>
    </Box>
  )
}