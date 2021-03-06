import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default ({ content, sidebar1, sidebar2 }) => (
  <Container fluid>
    <Row>
      <Col>
        {sidebar1}
      </Col>
      <Col>
        {sidebar2}
      </Col>
      <Col xs={6}>
        {content}
      </Col>
    </Row>
  </Container>
);
