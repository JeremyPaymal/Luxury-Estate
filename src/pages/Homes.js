import React from 'react';
import HomesSection from '../components/HomesSection';
import { InfoDataFour, InfoDataThree, InfoDataFive } from '../data/InfoData';
import { Fade } from 'react-reveal';

function Homes () {
  return (
    <>
        <Fade right><HomesSection {...InfoDataThree}/></Fade>
        <Fade left><HomesSection {...InfoDataFour}/></Fade>
        <Fade right><HomesSection {...InfoDataFive}/></Fade>
    </>
  )
}

export default Homes