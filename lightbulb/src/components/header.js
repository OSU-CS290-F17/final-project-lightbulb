import React from 'react';
import '../styles/header.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer to="/">
            <a>lightbulb</a>
          </LinkContainer>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/search">
          <NavItem eventKey={1}>explore</NavItem>
        </LinkContainer>
        <LinkContainer to="/post">
          <NavItem eventKey={2}>create</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  </div>
);

export default Header;