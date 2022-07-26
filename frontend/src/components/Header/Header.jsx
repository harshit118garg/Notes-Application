import React from "react";
import "./Header.css";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="warning" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">AnyWhere Notes</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav>
                <Link to="notes">My Notes</Link>
              </Nav>
              <NavDropdown title="Harshit Garg" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">LogOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
