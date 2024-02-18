import React,{useState} from 'react'
import { Box ,Button} from '@mui/material'
import {useLocation, useNavigate } from 'react-router-dom'
import { preview_style,next_style} from './uploadCompStyle'
import PreviewBox from './PreviewBox'
import { useAppContext } from '../../Context/Context'
export default function PreviewDoc() {
  const navigate = useNavigate();
  const location = useLocation();
  const {isSign,handleSignUp} = useAppContext();
  const [photo,setPhoto] = useState();
  const [aadhar,setAadhar] = useState();
  const [pan,setPan] = useState();
  const getProfile = location.state.getProfile;
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!photo||!pan||!aadhar){
      return alert('please upload documents properly')
    }
    const apiUrl = process.env.REACT_APP_BACKEND_URL + `/user/ids/${isSign._id}`; 
  try {
    const formData = new FormData();
    formData.append('images',photo);
    formData.append('images',pan);
    formData.append('images',aadhar);
    const response = await fetch(apiUrl, {
      method: 'PATCH',
 
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to update data');
    }

    const responseData = await response.json();
    const userData = responseData.user;
    const userToken = responseData.token;
    

    // const userinfo = JSON.parse(localStorage.getItem('userData'));
    // const usr = userinfo.user;
    // const tkn = 
    // const updatedUser = { ...usr, ...userData };
    localStorage.setItem('userData', JSON.stringify({user:userData,token:userToken}));

    handleSignUp(userData);

    if(getProfile){
      navigate(`/profile/${isSign._id}`);
    }
    else{
      navigate('/testinstructions');
    }
    console.log('Data updated successfully:', responseData);
  } catch (error) {
    console.error('Error updating data:', error.message);
  }


  }
  const handleValid = (file,comp)=>{
    // e.preventDefault();
    if(comp==='photoURL'&& file){
      setPhoto(file);
    }
    if(comp==='aadharURL'&& file){
      setAadhar(file);
    }
    if(comp==='panURL' && file){
      setPan(file);
    }


  }
  return (
    <Box sx={preview_style}>
      <PreviewBox valid={handleValid} comp='photoURL' /> <br />
      <PreviewBox valid={handleValid} comp='aadharURL' /> <br />
      <PreviewBox valid={handleValid} comp='panURL' /> <br />
      <Button onClick={handleSubmit} sx={next_style}>{getProfile?"Done":"Next"}</Button>
    </Box>
  )
}