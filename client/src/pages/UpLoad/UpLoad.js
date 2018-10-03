import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

//https://firebasestorage.googleapis.com/v0/b/mymusic-f24cb.appspot.com/o/resume%2FDAZ.docx?alt=media&token=7515b8ad-387d-4243-ad12-ef116cd381cb

class UpLoad extends Component {
    state = {
        skills: [],
        skill: "",
        wordDoc: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        
        console.log("Value " + value );
        this.setState({
          wordDoc: value
        });
        
      };
      
    loadSkills = () => {
         API.getSkills()
            .then((res) =>
                this.setState({ skills: res.data, skill: "Hello World" })
            )
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadSkills();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <p>Name <span className="spanName">Don Zarrillo</span></p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <p>Location: <span className="spanLocation">Middletown NJ</span></p>
                    </Col>
                </Row>

                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>My Skills</h1>
                        </Jumbotron>
                        {this.state.skills.length ? (
                            <List>
                                {this.state.skills.map(skill => (
                                    <ListItem key={skill._id}>
                                        <strong>
                                            {skill.skill}
                                        </strong>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <input
                            type="file" 
                            name="image_src" 
                            id="image_src" 
                            value={this.state.wordDoc}
                            placeholder="Load your resume, must be a word doc!"
                            onChange={this.handleInputChange}
                        />
                        
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <p>Or</p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <button>Input Skills</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UpLoad;