import React from "react";
import styled from "styled-components";

import { Background ,Paragraph} from "../Style";

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

const Footer = () => {
  return (
    <FooterBackground>
      <Paragraph>copyright 2020</Paragraph>
    </FooterBackground>
  );
};
export default Footer;
