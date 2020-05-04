import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default ({ children}) => {
  return (
      <Container fluid={true}>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
  );
};
