import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
      <footer className="mt-auto py-3 bg-light">
        <Container>
          <Row>
            <Col>
              <p>© {new Date().getFullYear()} Your App Name</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };

  export default Footer;
