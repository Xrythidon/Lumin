import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {" "}
          <Link href="/" passHref>
            <Navbar.Brand >Lumin</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link href="/cart" passHref>
              <Nav.Link>
                <i className="fas fa-shopping-cart" /> Cart
              </Nav.Link>
              </Link>
              <Link href="/login" passHref>
              <Nav.Link>
                <i className="fas fa-user" /> Sign In
              </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
