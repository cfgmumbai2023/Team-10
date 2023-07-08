import React from 'react';
import './header.css';
import { Navbar, Nav, FormControl, Button, Form, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <Navbar bg="light" className='nav'>
        <img src='https://rkssngo.org/wp-content/uploads/2021/02/cropped-logo-rkss-org.png' alt='RKSS' className='logo' />
        <Navbar.Brand className='ngoName'>RKSS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* Add more navigation links here */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="searchBar" />
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
