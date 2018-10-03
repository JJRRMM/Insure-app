import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

class Home extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Home Page</h1>
                        </Jumbotron>
                        {/* <p>Home page</p> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;