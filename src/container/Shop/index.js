import React, { useState } from "react";

import ItemsButtons from "../../components/ItemsShopButtons";
import Facturation from "../../components/Facturation";
import ListShop from "../../components/listShop";

import { TitleH3, Background, Container } from "../../components/Style";
import { Row, Col } from "react-bootstrap";

import { officeCatalogue } from "../../mockData/officeCatalogue";

const Shop = () => {
  const [listItems, setListItems] = useState(officeCatalogue);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSelected = name => {
    const list = listItems.map(e => {
      if (e.name === name && e.selected === false) {
        return { ...e, selected: true, quantity: 1 };
      }
      if (e.name === name && e.selected === true) {
        return { ...e, selected: false, quantity: 0 };
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
      if (e.name === name && action === "less" && e.quantity > 1) {
        const newQuantity = e.quantity - 1;
        return { ...e, quantity: newQuantity };
      } else {
        return e;
      }
    });
    setListItems(list);
  };

  return (
    <Container>
      <Background>
        <TitleH3>Order new Office Items</TitleH3>
      </Background>
      <Row>
        <Col xl={3}>
          <ItemsButtons onSelected={onSelected} listItems={listItems} />
        </Col>
        <Col xl={9}>
          <ListShop
            listItems={listItems}
            setQuantity={setQuantity}
            setShow={setShow}
          />
        </Col>
      </Row>
      <Facturation
        show={show}
        listItems={listItems}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </Container>
  );
};
export default Shop;
