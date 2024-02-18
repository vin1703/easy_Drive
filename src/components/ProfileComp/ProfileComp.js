import React from 'react'
import { Box } from '@mui/material'
import { main_profile } from './profileCompStyle'
import ImageProfile from './ImageProfile'
import ProfileDes from './ProfileDes'
function ProfileComp() {
  return (
    <Box sx={main_profile}>
      <ImageProfile/>
      <ProfileDes/>
    </Box>
  )
}

export default ProfileComp
