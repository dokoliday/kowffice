import React from "react";

import { Modal, Button, Col, Row } from "react-bootstrap";

import panierIcon from "../../assets/panier.png";

const Facturation = ({ listItems, handleClose, handleShow, show }) => {
  const arrayItemsPriceByQuantity = listItems.map(item => {
    if (item.selected === true) {
      return item.price * item.quantity;
    }
    return 0;
  });
  const total = arrayItemsPriceByQuantity.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return (
    <>
      <Row className="justify-content-md-center">
        <Button variant="primary" onClick={handleShow} margin="1vh">
          <img src={panierIcon} width="50" alt="panier"/>
        </Button>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Facture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {listItems.map((item, key) => {
            if (item.selected === true) {
              return (
                <Row key={key}>
                  <Col md={{ span: 3, offset: 2 }}>
                    <p>{item.name}</p>
                  </Col>
                  <Col>
                    <p>{item.quantity}</p>
                  </Col>
                </Row>
              );
            }return <></>;
          })}
          <p>Total : {total} euros</p>
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
export default Facturation;
