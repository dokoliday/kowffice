import React from "react";
import { Row, Col } from "react-bootstrap";
import { TitleH1,  Background,Paragraph} from "../Style";

const Shop = ({ listItems, setQuantity }) => {
  return (
    <div style={{ borderLeft: " solid black", height: "100%" }}>
      <Row>
        <Col>
        <Paragraph>Selected Quantities</Paragraph>
        </Col>
      </Row>
      <Row>
        {listItems
          .filter(item => item.selected === true)
          .map(item => {
            return (
              <Col md={{ span: 3, offset: 2 }}>
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
    </div>
  );
};
export default Shop;
