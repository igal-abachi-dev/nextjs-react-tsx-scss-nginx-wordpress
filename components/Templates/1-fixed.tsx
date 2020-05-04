import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default ({ children}) => {
  return (
      <Container style={{maxWidth: "1140px"}}>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
  );
};
