import './header.css';
import { FormControl, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img src='https://rkssngo.org/wp-content/uploads/2021/02/cropped-logo-rkss-org.png' className="logo" alt='RKSS' />
    <Form inline>
        <FormControl type="text" placeholder="Search" className="searchBar" />
        <Button variant="outline-success">Search</Button>
    </Form>
    <div>
      <Link to="/login"><Button >Login</Button></Link>
      <Link to="/signin"><Button >Signin</Button></Link>
    </div>
    </header>
  );
};

export default Header;
