import React from 'react'
import { Box } from '@mui/material'
import { process_main } from './processStyle';

import ProcessBox from './ProcessBox';

import UploadFileIcon from '@mui/icons-material/UploadFile';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TaskIcon from '@mui/icons-material/Task';

function ProcessContainer() {
  return (
    <Box sx={process_main}>
      <ProcessBox icon={UploadFileIcon} text="1. Upload File" />
      <ProcessBox icon={EditNoteIcon} text="2. Online Driving Test" />
      <ProcessBox icon={TaskIcon} text="3. Get Temporary License" />
    </Box>
  )
}

export default ProcessContainer
