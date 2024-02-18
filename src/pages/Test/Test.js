import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { testStyle, submit_test } from './TestStyle';
import Header from '../../components/TestComp/Header';
import Problems from '../../components/TestComp/Problems';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/Context';

function Test() {
  const navigate = useNavigate();

  useEffect(() => {
    const requestFullscreen = async () => {
      try {
        // Request permission to enter fullscreen mode
        await document.documentElement.requestFullscreen();
      } catch (error) {
        console.error('Failed to enter fullscreen mode:', error);
      }
    };

    requestFullscreen();

    const exitHandler = () => {
      if (!document.fullscreenElement) {
        navigate('/result');
      }
    };

    document.addEventListener('fullscreenchange', exitHandler);

    return () => {
      document.removeEventListener('fullscreenchange', exitHandler);
    };
  }, [navigate]);


  const {isSign,handleSignUp,score} = useAppContext();


  const handleTestSubmit = async(e) => {
    e.preventDefault();
    // patch
    const apiUrl = process.env.REACT_APP_BACKEND_URL + `/user/result/${isSign._id}`; // Replace with your API endpoin

    try {
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
          // Add any additional headers if required
        },
        body: JSON.stringify({
          score : score,
          status: score<8?"failed":"passed"
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
  
      const responseData = await response.json();
      const userData = responseData.user;
      const userToken = responseData.token;
      

      // const userinfo = JSON.parse(localStorage.getItem('userData'));
      // const usr = userinfo.user;
      // const updatedUser = { ...usr, ...userData };
      localStorage.setItem('userData', JSON.stringify({user:userData,token:userToken}));

      handleSignUp(userData);
      // console.log('Data updated successfully:', responseData);
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
    // patch

   
    navigate('/result', { replace: true });
  };

  return (
    <Box sx={testStyle}>
      <Header />
      <Problems />
      <Button onClick={handleTestSubmit} sx={submit_test}>Submit</Button>
    </Box>
  );
}

export default Test;
