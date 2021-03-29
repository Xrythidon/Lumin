import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { logout } from "../redux/actions/user";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {" "}
          <Link href="/" passHref>
            <Navbar.Brand>Lumin</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/cart" passHref>
                <Nav.Link>
                  <i className="fas fa-shopping-cart" /> Cart
                </Nav.Link>
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link href="/profile" passHref>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link href="/login" passHref>
                  <Nav.Link>
                    <i className="fas fa-user" /> Sign In
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
