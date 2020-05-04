import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default ({content, sidebar1, sidebar2}) => {
  return (
      <Container fluid={true}>
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
};
