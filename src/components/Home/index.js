import React from "react";
import { TitleH1, TitleH3, Background } from "../Style";
import office from "../../assets/office.jpg";
import styled from "styled-components";

const Image = styled.img`
  @media only screen and (min-width: 600px) {
    display: block;
    margin: auto;
    width: 70%;
    height: 80%
  }
  @media only screen and (max-width: 600px) {
    display: block;
    margin: auto;
    width: 100%;
    heigth:100%;
  }
`;
const Home = () => {
  return (
    <>
      <Background>
        <TitleH1>KOWFFICE</TitleH1>
        <TitleH3>Custom Your Office</TitleH3>
      </Background>
      <Image src={office} />
    </>
  );
};
export default Home;
