import React from "react";
import { Col, Container, Row } from 'reactstrap';

export default function GeneralLayout(props: any) {
    // debugger;
    const { component } = props;
    return (
        <Container>
            <Row>
                <Col md={12}>
                    {component()}
                </Col>
            </Row>
        </Container>
    );
}
