import React from "react";

import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Paragraph } from "../Style";

const Wrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    border-left: solid black;
    height: 100%;
  }
`;

const Shop = ({ listItems, setQuantity }) => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <Paragraph>Selected Quantities</Paragraph>
        </Col>
      </Row>
      <Row>
        {listItems
          .filter(item => item.selected === true)
          .map((item, key) => {
            return (
              <Col md={{ span: 3, offset: 2 }} key={key}>
                <div
                  style={{
                    border: "solid black",
                    textAlign: "center",
                    marginBottom: "2vh"
                  }}
                >
                  <p>{item.name}</p>
                  <p>{item.price} euros</p>
                  <img
                    src={item.image}
                    width="100vw"
                    height="100vh"
                    style={{ paddingBottom: "2vh" }}
                    alt={item.name}
                  />
                  <Row>
                    <Col xs={4}>
                      <p>quantity: {item.quantity}</p>
                    </Col>
                    <Col xs={4}>
                      <button onClick={() => setQuantity(item.name, "more")}>
                        +
                      </button>
                    </Col>
                    <Col xs={4}>
                      <button onClick={() => setQuantity(item.name, "less")}>
                        -
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
      </Row>
    </Wrapper>
  );
};
export default Shop;
