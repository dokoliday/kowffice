import React from "react";

import { Button, Col, Row, ListGroup } from "react-bootstrap";

const InventoryList = ({ listItems, toCommand }) => {
  const displayCommandButton = (isInCommand, name) => {
    if (!isInCommand) {
      return (
        <Button variant="outline-success" onClick={() => toCommand(name)}>
          command
        </Button>
      );
    }
    return (
      <Button variant="outline-danger" onClick={() => toCommand(name)}>
        unCommand
      </Button>
    );
  };
  return (
    <>
      <h2>Inventory : </h2>
      {listItems.map((item, key) => {
        return (
          <ListGroup key={key}>
            <ListGroup.Item>
              <Row>
                <Col md={6}>
                  {item.name} : {item.quantity}
                </Col>
                <Col md={6}>
                  need to be : {displayCommandButton(item.toCommand, item.name)}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </>
  );
};
export default InventoryList;
