import React,{useState} from 'react'
import { Box } from '@mui/material'
import {Button} from '@mui/material'
import ProfileDetailBox from './ProfileDetailBox';
import { des_style,edit_box,edit_button} from './profileCompStyle'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/Context';

// import { DUMMY_USERS } from '../../DUMMY_USERS';


function ProfileDes() {
    const {isSign} = useAppContext();
    const [name,setName] = useState(isSign.name);
    const [number,setNumber] = useState(isSign.number);
    const [email,setEmail] = useState(isSign.email);
    const [address,setAddress] = useState(isSign.address);
    
    const navigate = useNavigate();
    const handleProfileOpener = () =>{
        navigate('/result');
    }
    
    const handleDocsEdit = (e) =>{
        e.preventDefault();
        navigate(`/upload/${isSign.id}`, { state: { getProfile: true }});
    }
    const handleDetail = (value,key)=>{
        if(key==="Name"){
            setName(value);
        }
        if(key==="Number"){
            setNumber(value);
        }
        if(key==="Email"){
            setEmail(value);
        }
        if(key==="Address"){
            setAddress(value);
        }
        

}
  return (
    <Box sx={des_style}>
        <ProfileDetailBox info={name} assignTo="Name" onSave={handleDetail} />
        <ProfileDetailBox info={number} assignTo="Number" onSave={handleDetail} />
        <ProfileDetailBox info={email} assignTo="Email" onSave={handleDetail} />
        <ProfileDetailBox info={address} assignTo="Address" onSave={handleDetail} />
        
        <Box sx={edit_box}>

            <Button sx={edit_button} onClick={handleProfileOpener} >Result</Button>
            <Button sx={edit_button} onClick={handleDocsEdit} >Edit Docs</Button>
        </Box>
    </Box>
  )
}

export default ProfileDes
