import { Box } from '@mui/material'
import React from 'react'
import { profileStyle,exitBox,exitIcon} from './profileStyle'
import ProfileComp from '../../components/ProfileComp/ProfileComp'
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate();
  const {handleSignUp,handleToken} = useAppContext();
  const handleLogout = () =>{
    handleToken(null);
    handleSignUp(null);
    localStorage.removeItem('userData');
    navigate('/', { replace: true });
  }
  return (
    <>
    <Box sx={exitBox} onClick={handleLogout}><LogoutIcon sx={exitIcon}/></Box>
    <Box sx={profileStyle}>
      <ProfileComp/>
    </Box>
    </>
    
  )
}

export default Profile
