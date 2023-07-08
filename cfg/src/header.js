import React from 'react';
import { Navbar, Nav, FormControl, Button, Form, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* Add more navigation links here */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
              {/* Add more dropdown items here */}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
        <Link to="/login"><Button >Login</Button></Link>
        <Link to="/signin"><Button >Signin</Button></Link>
        
      </Navbar>
    );
  };

  export default Header;
