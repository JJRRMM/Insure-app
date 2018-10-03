import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class Profile extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Profile Page</h1>
                        </Jumbotron>
                        {/* <p>Profile page</p> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;