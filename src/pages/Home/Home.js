import React from 'react';

import HeaderContent from '../../components/HomeComp/HeaderContent';

import { Box } from '@mui/material';
import { mainHomeStyle } from './homeStyle';
import ProcessContainer from '../../components/HomeComp/ProcessContainer';
import Footer from '../../components/HomeComp/Footer';

function Home() {
  return (
    <Box sx={mainHomeStyle}>
        <HeaderContent/>
        <ProcessContainer/>
        <Footer/>
    </Box>
  );
}

export default Home;
