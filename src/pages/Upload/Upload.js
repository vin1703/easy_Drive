import React from 'react'
import { Box } from '@mui/material'
import { upload_style } from './uploadStyle'
import UploadComp from '../../components/UploadComp/UploadComp'
import PreviewDoc from '../../components/UploadComp/PreviewDoc'
export default function Upload() {
  return (
    <Box sx={upload_style}>
      <UploadComp/>
      <PreviewDoc/>
    </Box>
  )
}