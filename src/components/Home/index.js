import React from "react";
import { TitleH1,  Background,Paragraph} from "../Style";
import office from "../../assets/office.jpg";
import styled from "styled-components";
import { Button, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const Image = styled.img`
  @media only screen and (min-width: 600px) {
    display: block;
    margin: auto;
    width: 70%;
    height: 80%;
  }
  @media only screen and (max-width: 600px) {
    display: block;
    margin: auto;
    width: 100%;
    heigth: 100%;
  }
`;
const Home = () => {
  return (
    <>
      <Background>
        <TitleH1>KOWFFICE</TitleH1>
      </Background>
      <Row className="justify-content-md-center">
        <Col xl={2}>
          <Nav.Link href="/shop">
            <Button variant="outline-secondary" style={{ margin: "1vh" }}>
              <Paragraph>Custom Your Office</Paragraph>
            </Button>
          </Nav.Link>
        </Col>
      </Row>
      <Image src={office} />
    </>
  );
};
export default Home;
