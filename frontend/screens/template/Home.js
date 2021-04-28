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
`;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) => (isHeading ? fontSizes.large : fontSizes.small)};
  color: ${({ theme: { colors } }) => colors.persianGreen};
  font-weight: 600;
`;

const Banner = styled.div`
  width: 100%;
  background-color: black;
  padding: 2px;
`
const BannerText = styled.p`
  color: ${({ theme: { colors } }) => (colors.persianGreen)};
  text-align: center;
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: ${(props) => props.theme.fontSizes.small}
`

const Home = () => {
  return (
    <Theme>
      <Banner><BannerText>Potato</BannerText></Banner>
      <Container>
        <Heading isHeading>Hello world!</Heading>
        <h2>By the power of styled-components!</h2>
      </Container>
    </Theme>
  );
};

export default Home;
