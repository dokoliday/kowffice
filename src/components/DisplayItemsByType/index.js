import React from "react";

import { Row, Col } from "react-bootstrap";

const DisplayItemsByType = ({ setQuantity, type, listItems }) => {
  return listItems
    .filter(items => items.type === type)
    .map(item => {
      if (item) {
        return (
          <Col>
            <div
              style={{
                border: "solid black",
                textAlign: "center",
                marginBottom: "2vh"
              }}
            >
              <p>{item.name}</p>
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
      }
      return<></>;
    });
};

export default DisplayItemsByType;
