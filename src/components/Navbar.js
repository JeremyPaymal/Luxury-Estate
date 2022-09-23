import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { GoThreeBars } from "react-icons/go";
import "../App.css";
import Popup from "reactjs-popup";

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(GoThreeBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-tight: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const StyledPopup = styled(Popup)`   
`;

const StyledPopupWrapper = styled.div`
    margin-top: 50px;
    

    .close{
       cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: -5px;
        z-index: 1;
        font-size: 24px;
        background: #ffffff;
        border-radius: 18px;
        border: 1px solid #cfcece; 
    }
`;

const StyledPopupForm = styled.div`
        form{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        };

        input, textarea{
            
            padding: 1.5rem;
            border-radius: 0.5rem;
            background: transparent;
            border: 2px solid black;
        };
        
`;

const StyledPopupHeadTitle = styled.div`
        padding-bottom: 1.5rem;
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        
`;

const StyledPopupContent = styled.div`
        width: 500px;
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        background: rgba(255,255,255, 0.95);
        border-radius: 0.5rem;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 10px 10px 8px #888888;
`;


const Navbar = ({ toggle }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <Logo to="/" onClick={scrollToTop}>
        LUXURY ESTATE
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} onClick={scrollToTop}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <StyledPopup
          trigger={<Button primary="true">Contact Us</Button>}
          modal
          nested
        >
          {(close) => (
            <StyledPopupWrapper>
              <button className="close" onClick={close}>
                &times;
              </button>
              <StyledPopupContent>
              <StyledPopupHeadTitle> CONTACT </StyledPopupHeadTitle>
              <StyledPopupForm>
                <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Mail"
                    required
                  />
                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                  />
                </form>
                <Button
                  primary="true"
                  css={`
                    margin-top: 1rem;
                  `}
                >
                  Submit
                </Button>
              </StyledPopupForm>
              </StyledPopupContent>
            </StyledPopupWrapper>
          )}
        </StyledPopup>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
