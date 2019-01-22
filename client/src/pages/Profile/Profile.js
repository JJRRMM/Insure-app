import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Profile extends Component {
  // Setting our component's initial state
  state = {  
    profiles: [],  
    id: "",  
    firstname: "", 
    lastname: "",
    State: "",
    city: "",
    zip: ""   
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadProfile();
  }

  // Loads all books  and sets them to this.state.books
  loadProfile = () => {
    API.getProfile()
      .then(res =>
        this.setState({ profiles: res.data, id: "", firstname: "", lastname: "", adrr_line1: "", city: "", State: "" , zip: ""  })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteProfile = id => {   
    API.deleteProfile(id)
      .then(res => this.loadProfile())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(" First name is below : ");
    console.log(this.state.firstname);
    if (this.state.firstname && this.state.lastname) {
      API.saveProfile({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        adrr_line1: this.state.adrr_line1,
        city: this.state.city,
        State: this.state.State,
        zip: this.state.zip
      })
        .then(res => this.loadProfile())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter Profile Information</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.firstname}
                onChange={this.handleInputChange}
                name="firstname"
                placeholder="First name (required)"
              />
              <Input
                value={this.state.lastname}
                onChange={this.handleInputChange}
                name="lastname"
                placeholder="Last Name (required)"
              />
              <Input
                value={this.state.adrr_line1}
                onChange={this.handleInputChange}
                name="adrr_line1"
                placeholder="Address line (optional)"
              />
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (optional)"
              />
              <Input
                value={this.state.State}
                onChange={this.handleInputChange}
                name="State"
                placeholder="State (optional)"
              />   
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip (optional)"
              />         
              <FormBtn
                disabled={!(this.state.firstname && this.state.lastname)}
                onClick={this.handleFormSubmit}
              >
                Submit Profile
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>All Profiles </h1>
            </Jumbotron>
            {this.state.profiles.length ? (
              <List>
                {this.state.profiles.map(profile => {
                  return (
                    <ListItem key={profile.id}>
                      <a href={"/profiles/" + profile.id}>
                        <strong>
                          <p>Named Insured</p> 
                          {profile.firstname}  {profile.lastname} {" "} {profile.id}
                        </strong>
                        <strong>
                          <p>Mailing Address</p>
                          {profile.adrr_line1}
                          <p> 
                          {profile.city} {" "}
                          {profile.State}
                          {profile.zip}</p>  
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteProfile(profile.id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
