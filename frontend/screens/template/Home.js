import React from "react";
import Theme from "./UI/theme";
import styled from "styled-components";
import media from "./UI/mediaQueries";

const Container = styled.div`
  /* ${media.greaterThan("sm")`
    width: 50%;
  `} */
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${(props) => props.theme.colors.lightBlue};
  font-family: ${(props) => props.theme.fonts[0]};
  padding: 15px;
`;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
  font-weight: 600;
`;

const SubHeading = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
  color: ${({ theme: { colors } }) => colors.persianGreen};
  /* font-family: "Helvetica"; */
  font-weight: 300;
`;

const HeadingDesc = styled.p`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts[0]};
  color: ${({ theme: { colors } }) => colors.onyx};
  font-weight: 100;
`;

const Banner = styled.div`
  width: 100%;
  background-color: black;
  padding: 2px;
`;
const BannerText = styled.p`
  color: ${({ theme: { colors } }) => colors.persianGreen};
  text-align: center;
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const HeroContainer = styled.div`
  height: 100vh; // stay 100vh until I scroll
  width: 100vw;
  margin: 0 -17px;
`;

const HeroImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
`;

const HeroHeader = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props) => props.theme.colors.text};
  font-size: 5rem;
  transform: translate(-50%, -50%);
  /* width: 69.3%;
  max-width: 390px; */
  transition: opacity 300ms;
  z-index: 1;
`;

const NavContainer = styled.div``;

const Nav = styled.div``;
const NavLink = styled.a``;

const Home = () => {
  return (
    <Theme>
      <HeroContainer>
        <HeroImageWrapper>
          <HeroImage src="https://www.gasbijoux.com/pub/media/wysiwyg/home_page/header/desk-hp-pure.jpg" />
        </HeroImageWrapper>
        <NavContainer>
          <Nav>
            <NavLink></NavLink>
          </Nav>
        </NavContainer>
        <HeroHeader>Lumin</HeroHeader>
      </HeroContainer>
    </Theme>
  );
};

export default Home;

// https://www.gasbijoux.com/pub/media/wysiwyg/home_page/header/desk-hp-pure.jpg
