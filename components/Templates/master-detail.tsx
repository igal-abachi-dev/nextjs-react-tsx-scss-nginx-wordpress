import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default ({ master, detail }) => (
  <Container fluid>
    <Row>
      <Col>
        {master}
      </Col>
    </Row>
    <Row>
      <Col>
        {detail}
      </Col>
    </Row>
  </Container>
);
