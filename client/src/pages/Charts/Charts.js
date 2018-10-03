import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

class Charts extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Place Charts on this page</h1>
                        </Jumbotron>
                        {/* <p>Place Charts on this page</p> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Charts;