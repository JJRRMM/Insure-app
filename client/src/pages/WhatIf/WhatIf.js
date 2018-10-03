import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

class WhatIf extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>The What-if Page</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WhatIf;