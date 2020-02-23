import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const DisplayNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Kowffice</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/">Custom your items</Nav.Link>
          <Nav.Link href="/">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default DisplayNavbar;
