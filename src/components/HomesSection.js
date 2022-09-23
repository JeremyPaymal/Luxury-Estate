import React from "react";
import styled from "styled-components";
import { Button } from "./Button";


const HomeSection = styled.div`
        width: 100%,
        height: 100%;
        display:flex;
        padding-top: 4rem;
        

`;
const HomeWrapper = styled.div`
  background-image: linear-gradient(black, black), linear-gradient(black, black),
    linear-gradient(black, black), linear-gradient(black, black),
    linear-gradient(white, white);
  background-repeat: no-repeat;
  background-size: 4px 30%, 30% 4px, 4px 30%, 30% 4px,
    calc(100% - 8px) calc(100% - 8px);
  background-position: left bottom, left bottom, right top, right top, 4px 4px;

  padding: 3rem calc((100vw - 1300px) / 2);
  margin-top: 20px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const HomeImage = styled.div`
  padding: 1rem 1rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;
const HomeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 1rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const HomesSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <HomeSection>
      <HomeWrapper>
        <HomeImage reverse={reverse}>
          <img src={image} alt="Homes"></img>
        </HomeImage>
        <HomeDescription reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
          <Button primary="true">{buttonLabel}</Button>
        </HomeDescription>
      </HomeWrapper>
    </HomeSection>
  );
};

export default HomesSection;
