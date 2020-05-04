import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default ({content, sidebar}) => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={6}>
                    {content}
                </Col>
                <Col xs={6}>
                    {sidebar}
                </Col>
            </Row>
        </Container>
    );
};
