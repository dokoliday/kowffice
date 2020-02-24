import React from "react";

import { Modal, Button, Col, Row, Nav } from "react-bootstrap";
import { Paragraph } from "../../components/Style";

const PrintIventoryList = ({ listItems, show, handleClose, handleShow }) => {
  return (
    <>
      <Row>
        <Button
          variant="outline-primary"
          style={{ margin: "1vh" }}
          onClick={handleShow}
        >
          <Paragraph>Print Inventory</Paragraph>
        </Button>
      </Row>
      <Row>
        <Nav.Link href="/shop">
          <Button variant="outline-success" style={{ margin: "1vh" }}>
            <Paragraph>Go To Shop</Paragraph>
          </Button>
        </Nav.Link>
      </Row>
      <Row className="justify-content-md-center"></Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            inventory of{" "}
            {new Date()
              .toJSON()
              .slice(0, 10)
              .replace(/-/g, "/")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listItems.map((item, key) => {
            return (
              <Row key={key}>
                <Col md={{ span: 3, offset: 2 }}>
                  <p>{item.name}</p>
                </Col>
                <Col>
                  <p>{item.quantity}</p>
                </Col>
                <Col>
                  <p>{item.toCommand ? "need to command" : "enough"}</p>
                </Col>
              </Row>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PrintIventoryList;
