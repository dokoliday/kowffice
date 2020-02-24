import React from "react";
import styled from "styled-components";

import { Background, Paragraph } from "../Style";

const FooterBackground = styled(Background)`
  @media only screen and (min-width: 1024px) {
    position: absolute;
    bottom: -15vh;
    width: 100%;
  }
`;

const Footer = () => {
  const screenSize = window.screen.width;
  const shouldRenderFooter = () => {
    if (screenSize >= 1024) {
      return (
        <FooterBackground>
          <Paragraph>copyright 2020</Paragraph>
        </FooterBackground>
      );
    }
    return <></>;
  };
  return shouldRenderFooter();
};
export default Footer;
