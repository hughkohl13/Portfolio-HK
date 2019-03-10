import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "semantic-ui-react";
import { Input, TextArea, FormBtn } from "../components/Form";
import './style.css';

class Contact extends Component {
  state = {
    projects: [],
    title: "",
    tech: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.tech) {
      API.saveProject({
        title: this.state.title,
        tech: this.state.tech,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
          <Jumbotron>
            <h1>Need help?</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              value={this.state.tech}
              onChange={this.handleInputChange}
              name="tech"
              placeholder="Author (required)"
            />
            <TextArea
              value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(this.state.tech && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit Project
            </FormBtn>
          </form>
      </Container>
    );
  }
}

export default Contact;