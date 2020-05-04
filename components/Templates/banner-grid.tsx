import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import _ from 'lodash';

const chunkPerGridRow: number = 3;// 3-6
const usePerfectScroll: boolean = false;

export default ({ banner, items, itemRenderer }) => (
  <Container fluid>
    <Row>
      <Col>
        {banner}
      </Col>
    </Row>
    <Row>
      <Col>
        {/* make scrollable */}
        <Container fluid>
          {
                            _.chunk(items, chunkPerGridRow).map((c) => (
                              <Row>
                                {
                                                c.map((item) => (
                                                  <Col>
                                                    {itemRenderer(item)}
                                                  </Col>
                                                ))
                                            }
                              </Row>
                            ))
                        }
        </Container>
      </Col>
    </Row>
  </Container>
);
