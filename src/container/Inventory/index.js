import React, { useState } from "react";

import { Paragraph, Background, TitleH3 } from "../../components/Style";

import { Row, Col, Button } from "react-bootstrap";
import { officeCatalogue } from "../../mockData/officeCatalogue";

import DisplayItemsByType from "../../components/DisplayItemsByType";
import InventoryList from "../../components/InventoryList";
import PrintIventoryList from "../../components/PrintInventorylist";

const Inventory = () => {
  const [listItems, setListItems] = useState(officeCatalogue);
  const [type, setType] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toCommand = name => {
    const list = listItems.map(e => {
      if (e.name === name && e.toCommand === false) {
        return { ...e, toCommand: true };
      }
      if (e.name === name && e.toCommand === true) {
        return { ...e, toCommand: false };
      } else {
        return e;
      }
    });

    setListItems(list);
  };

  const setQuantity = (name, action) => {
    const list = listItems.map(e => {
      if (e.name === name && action === "more") {
        const newQuantity = e.quantity + 1;
        return { ...e, quantity: newQuantity };
      }
      if (e.name === name && action === "less" && e.quantity > 0) {
        const newQuantity = e.quantity - 1;
        return { ...e, quantity: newQuantity };
      } else {
        return e;
      }
    });
    setListItems(list);
  };

  return (
    <>
      <Background>
        <TitleH3>Office Inventory</TitleH3>
      </Background>
      <Row>
        <Col md={{ span: 3 }}>
      <Button
        variant="outline-primary"
        style={{ margin: "1vh" }}
        onClick={() => setType("electronics")}
      >
        <Paragraph>Electronics</Paragraph>
      </Button>
      <Button
        variant="outline-danger"
        style={{ margin: "1vh" }}
        onClick={() => setType("furniture")}
      >
        <Paragraph>Furnitures</Paragraph>
      </Button>
      <Button
        variant="outline-warning"
        style={{ margin: "1vh" }}
        onClick={() => setType("accessory")}
      >
        <Paragraph>Accessory</Paragraph>
      </Button>
          <DisplayItemsByType
            type={type}
            setQuantity={setQuantity}
            listItems={listItems}
          />
        </Col>
        <Col md={{ span: 6 }}>
          <InventoryList listItems={listItems} toCommand={toCommand} />
        </Col>
        <Col md={{ span: 3 }}>
          <PrintIventoryList
            handleShow={handleShow}
            handleClose={handleClose}
            show={show}
            listItems={listItems}
          />
        </Col>
      </Row>
    </>
  );
};
export default Inventory;
