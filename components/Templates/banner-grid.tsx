import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import _ from "lodash";

const chunkPerGridRow: number = 3;//3-6
const usePerfectScroll: boolean = false;

export default ({banner, items, itemRenderer}) => {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    {banner}
                </Col>
            </Row>
            <Row>
                <Col>
                    {/*make scrollable*/}
                    <Container fluid={true}>
                        {
                            _.chunk(items, chunkPerGridRow).map((c) => {
                                    return (
                                        <Row>
                                            {
                                                c.map((item) => {
                                                        return (
                                                            <Col>
                                                                {itemRenderer(item)}
                                                            </Col>
                                                        );
                                                    }
                                                )
                                            }
                                        </Row>);
                                }
                            )
                        }
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};
