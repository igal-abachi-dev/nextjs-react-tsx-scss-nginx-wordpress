import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default ({content, sidebarRight, sidebarLeft}) => {
  return (
      <Container fluid={true}>
        <Row>
          <Col>
            {sidebarRight}
          </Col>
          <Col xs={6}>
            {content}
          </Col>
          <Col>
            {sidebarLeft}
          </Col>
        </Row>
      </Container>
  );
};
