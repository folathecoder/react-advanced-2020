import React from "react";
import styled from "styled-components";

const Header = styled.header`
  min-height: 0px;
  max-width: 100%;
  /* background-color: blue; */
`;

const HeaderWrap = styled.div`
  min-height: 70px;
  max-width: 1100px;
  margin: 0 auto;
  background-color: yellow;
`;

const Section = styled.section`
  min-height: 0px;
  max-width: 100%;
  /* background-color: black; */
`;

const SectionWrap = styled.div `
    min-height: 500px;
    max-width: 1100px;
    margin: 0 auto;
    background-color: red;
`

const HeroSection = styled.div `
    max-width: 100%;
    max-height: 100%;
    background-color: blue;
    display: flex;
    flex-direction: column;

    & > * {
        flex: 1;
    }

`

const HeroImage = styled.div `
    background-color: purple;
`

const HeroContent = styled.div `
    background-color: beige;
`

const Footer = styled.footer `
    min-height: 0px;
    max-width: 100%;
    /* background-color: blue; */
`

const FooterWrap = styled.div`
  min-height: 70px;
  max-width: 1100px;
  margin: 0 auto;
  background-color: yellow;
`;

const shop = () => {
  return (
    <>
      <Header>
        <HeaderWrap></HeaderWrap>
      </Header>

      <Section>
        <SectionWrap>
            <HeroSection>
                <HeroImage>Image</HeroImage>
                <HeroContent>Content</HeroContent>
            </HeroSection>
        </SectionWrap>
      </Section>

      {/* <Section>
        <SectionWrap></SectionWrap>
      </Section> */}

      <Footer>
          <FooterWrap></FooterWrap>
      </Footer>
    </>
  );
};

export default shop;
