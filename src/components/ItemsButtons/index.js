import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Paragraph } from "../../components/Style";

import selectedIcon from "../../assets/selected.png";
import unSelectedIcon from "../../assets/unSelected.png";

const ItemsButtons = ({ onSelected, listItems }) => {
  const displayItemsButtons = listItems.map((item, key) => {
    if (item.selected === false) {
      return (
        <Row>
          <Col xl={{ span: 7, offset: 2 }} xs={{ span: 8, offset: 2 }}>
            <Button
              variant="outline-secondary"
              onClick={() => onSelected(item.name)}
              key={key}
              style={{ margin: "1vh", width: "60%" }}
            >
              <Paragraph>{item.name}</Paragraph>
            </Button>
          </Col>
          <Col>
            <img src={unSelectedIcon} width="30vw" />
          </Col>
        </Row>
      );
    }
    return (
      <Row>
        <Col xl={{ span: 7, offset: 2 }} xs={{ span: 8, offset: 2 }}>
          <Button
            variant="outline-secondary"
            onClick={() => onSelected(item.name)}
            key={key}
            style={{ margin: "1vh", width: "60%" }}
          >
            <Paragraph>{item.name}</Paragraph>
          </Button>
        </Col>
        <Col>
          <img src={selectedIcon} width="30vw" />
        </Col>
      </Row>
    );
  });
  return displayItemsButtons;
};

export default ItemsButtons;
