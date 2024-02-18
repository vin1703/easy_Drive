import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { test_header, headingStyle } from './testCompStyle';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [timeLeft, setTimeLeft] = useState(1800);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {

      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);
    if (timeLeft === 0) {
      clearInterval(timer);
      navigate('/result');
    }


    return () => clearInterval(timer);
  }, [timeLeft,navigate]);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={test_header}>
      <Box sx={headingStyle}>
        <Typography sx={{ marginLeft: "80px" }} variant='h3' color='#64ffda'>Online Driving Test</Typography>
        <Typography sx={{ marginLeft: "80px" }} variant='h5' color='#ccd6f6'>Please do not exit full Screen!</Typography>
      </Box>
      <Box sx={headingStyle}>
        <Typography sx={{ marginRight: "110px" }} variant='h4' color='#64ffda'>Time Left :</Typography>
        <Typography sx={{ marginRight: "110px" }} variant='h5' color='#ccd6f6'>{formatTime()}</Typography>
      </Box>
    </Box>
  );
}

export default Header;
