import React, { useState } from "react";

import { TitleH3, Background } from "../../components/Style";

import ListShop from "../../components/listShop";
import { Row, Col } from "react-bootstrap";
import { furnitures } from "../../mockData/furnitures";

import ItemsButtons from "../../components/ItemsButtons";
import Facturation from "../../components/Facturation";

const Shop = () => {
  const [listItems, setListItems] = useState(furnitures);
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
    <>
      <Background>
        <TitleH3>Select All your Office Items</TitleH3>
      </Background>
      <Row>
        <Col xl={3}>
          <ItemsButtons onSelected={onSelected} listItems={listItems} />
          <Facturation
        show={show}
        listItems={listItems}
        handleClose={handleClose}
        handleShow={handleShow}
      />
        </Col>
        <Col xl={9}>
          <ListShop
            listItems={listItems}
            setQuantity={setQuantity}
            setShow={setShow}
          />
        </Col>
      </Row>
   
    </>
  );
};
export default Shop;
