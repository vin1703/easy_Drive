import React from 'react'
import { Box ,Typography} from '@mui/material'
import { main_footer,contact_footer,right_footer} from './footerStyle'
function Footer() {
  return (
    <Box sx={main_footer}>
      <Box sx={contact_footer}>
        <Typography variant='h4' color='#64ffda'>Contact Us</Typography>
        <Typography variant='h5' color='#ccd6f6'>mail us : drivinglicense@gmail.com</Typography>
        <Typography variant='h5' color='#ccd6f6'>phone no. : +91 7938983923</Typography>
        <Typography variant='h5' color='#ccd6f6'>civil Lines 34,KP Marg,Dwarka<br />New Delhi-113456 </Typography>
      </Box>
      <Box sx={right_footer}><Typography variant='h4' color='#64ffda'> Drive Corporation</Typography><Typography variant='h5' color='#ccd6f6'>&copy; All rights reserved</Typography>
      </Box>
      
    </Box>
  )
}

export default Footer
