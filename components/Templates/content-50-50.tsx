import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default ({ left, right }) => (
  <Container fluid>
    <Row>
      <Col xs={6}>
        {right}
      </Col>
      <Col xs={6}>
        {left}
      </Col>
    </Row>
  </Container>
);
