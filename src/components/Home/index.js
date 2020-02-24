import React from "react";

import styled from "styled-components";
import { TitleH1, Background, Paragraph, Container } from "../Style";
import { Button, Row, Col, Nav } from "react-bootstrap";

import office from "../../assets/office.jpg";


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
    <Container>
      <Background>
        <TitleH1>KOWFFICE</TitleH1>
      </Background>
      <Row className="justify-content-md-center">
        <Col xl={2}>
          <Nav.Link href="/inventory">
            <Button variant="outline-secondary" style={{ margin: "1vh" }}>
              <Paragraph>office Inventory</Paragraph>
            </Button>
          </Nav.Link>
        </Col>
        <Col xl={2}>
          <Nav.Link href="/shop">
            <Button variant="outline-secondary" style={{ margin: "1vh" }}>
              <Paragraph>Items Shop</Paragraph>
            </Button>
          </Nav.Link>
        </Col>
      </Row>
      <Image src={office} />
    </Container>
  );
};
export default Home;
