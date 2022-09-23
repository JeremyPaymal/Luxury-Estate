import React from "react";
import styled from "styled-components/macro";
import Image from "../images/About.jpg";

const AboutSectionContainer = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;

`;

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const AboutImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;


const AboutContent = styled.h1`
  
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 200px);
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(0,0,0, 0.5);

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    margin-right: 20px;
    font-size: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width:700px){
    width: 90%;
    margin: 15rem 0;
  }
  @media screen and (max-width:550px){
    
    p{
      font-size: 0.8rem;
    }
  }
`;


const AboutSection = () => {

  return (
    <AboutSectionContainer>
      <AboutWrapper>
        <AboutImage src={Image} alt="about" />
        <AboutContent>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.  Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AboutContent>
      </AboutWrapper>
    </AboutSectionContainer>
  );
};

export default AboutSection;
