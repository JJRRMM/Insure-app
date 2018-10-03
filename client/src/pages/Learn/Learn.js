import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";


class Learn extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <p>The Learning Page</p>
                    </Col>
                </Row>
            <iframe src="https://jobscan.co/iframe?btncolor=1f57b5&utm_source=rutgersedubootcamp&utm_medium=iframe"width="800" height="650">
                <p>Your browser does not support iframes.</p>
                </iframe>
            </Container>
        );
    }
}

export default Learn;
