import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: black;
`;

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

const FooterListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-top: 32px;
        margin: 40px 40px;
        align-items: center;
        justify-content: center;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 200px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 375px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

const FooterLinksNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 340px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 280px) {
     width: 200px;

`;

const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;    
`;

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        transform: translateY(-2px);
    }
`;

const FooterLinkParagraph = styled.p`
    font-size: 14px;

    margin-bottom: 0.7rem;

`;

const FooterLinkInput = styled.input`
    width: 340px;
    height: 30px;

    @media screen and (max-width: 376px) {
        width: 300px;
     }

     @media screen and (max-width: 280px) {
        width: 200px;
     }

`;

const FooterButton = styled.button`
    background-color:white; 
    color:black; 
    margin-top: 20px; 
    padding: 10px 40px; 
    border-radius:5px; 
    font-size: 14px;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);  
    }
`;

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        
    }
`;

const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterListContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink>Our Story</FooterLink>
                        <FooterLink>Investors</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Terms of Services</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink>Contact</FooterLink>
                        <FooterLink>Support</FooterLink>
                        <FooterLink>Rentals</FooterLink>
                        <FooterLink>Buy or Sell</FooterLink>
                </FooterLinksItems> 
                <FooterLinksNewsletter>
                    <FooterLinkTitle>Newsletter</FooterLinkTitle>
                        <FooterLinkParagraph>Please subscribe in order to never miss an opportunity !</FooterLinkParagraph>
                        <FooterLinkInput type="email" placeholder="Email" ></FooterLinkInput>
                        <FooterButton>Submit</FooterButton>
                </FooterLinksNewsletter>
            </FooterLinksWrapper>
            </FooterListContainer>
            <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                            MTL
                        </SocialLogo>
                        <WebsiteRights> MTL © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;