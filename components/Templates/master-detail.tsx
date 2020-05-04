import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

export default ({master, detail}) => {
    return (
        <Container fluid={true}>
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
};
