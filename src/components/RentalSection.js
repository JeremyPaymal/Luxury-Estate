import React from 'react';
import styled from 'styled-components';


const RentalContainer = styled.section`
    height: 100vh;
    background: rgba(255,255,255,0.5)
`;

const RentalText = styled.div`
    
    h1{    
    text-align: center;
    position: relative;
    padding: 50vh 0;
    font-size: 100px;
    }

    @media screen and (max-width: 450px){
      h1{
        font-size: 50px;
      }
    }
    
`;

const RentalSection = () => {
  return (
    <RentalContainer>
        <RentalText>
            <h1>COMING SOON</h1>
        </RentalText>

    </RentalContainer>
  )
}

export default RentalSection