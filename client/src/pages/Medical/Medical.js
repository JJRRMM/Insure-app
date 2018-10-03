import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

// Change the class name below, update the header, change the export defualt below. 
class Medical extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Medical Page</h1>
                        </Jumbotron>
                        {/* <p>Medical page</p> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Medical;