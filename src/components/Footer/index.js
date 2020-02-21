import React from "react";
import styled from "styled-components";

import { Background } from "../Style";

const FooterBackground = styled(Background)`
  @media only screen and (max-width: 1024px) {
    position: absolute;
    bottom: 0;
    padding: 1vh;
  }
  @media only screen and (min-width: 1024px) {
    margin-bottom: 0;
    margin-top: 6vh;
    padding: 1vh;
  }
`;
const Paragraph = styled.p`
@media only screen and (min-width: 1024px) {
  font-size: 1.5vw;
  text-align: center;
  color: white;

};
@media only screen and (max-width: 1024px) {
  font-size: 4vw;
  text-align: center;
  color: white;
`;

const Footer = () => {
  return (
    <FooterBackground>
      <Paragraph>copyright 2020</Paragraph>
    </FooterBackground>
  );
};
export default Footer;
