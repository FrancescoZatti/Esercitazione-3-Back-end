import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Dati Generali</h5>
            <p>Indirizzo: Via Example, 123</p>
            <p>Email: info@example.com</p>
          </Col>
          <Col md={6}>
            <h5>Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="users">Users</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;

