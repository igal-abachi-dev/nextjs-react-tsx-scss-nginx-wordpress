import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default ({ children }) => (
  <Container fluid>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
);
