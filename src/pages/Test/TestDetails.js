import React from 'react'
import { Box } from '@mui/material'
import TestDetailComp from '../../components/TestComp/TestDetailComp'
import { test_detail_style } from './TestStyle'

export default function TestDetails() {
  return (
    <Box sx={test_detail_style}>
        <TestDetailComp/>
    </Box>
  )
}