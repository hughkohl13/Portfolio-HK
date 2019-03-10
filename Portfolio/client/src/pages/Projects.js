import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import  Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Card, Container, Image } from 'semantic-ui-react';
import './style.css'


class Projects extends Component {
  state = {
    projects: [],
    title: "",
    tech: "",
    synopsis: "",
    image:""
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
        {this.state.projects.length ? (
        <Card.Group>
          {this.state.projects.map(project => (
            <Card style={{  }} key={project._id}>
              <Card.Content>
                <Image variant="top" src={project.image} circular/>
                  <Card.Header>
                  <Link to={"/projects/" + project._id}>
                    {project.title}
                  </Link>  
                  </Card.Header>
                  <Card.Description>
                      {project.synopsis}
                  </Card.Description>
                  {/* <DeleteBtn onClick={() => this.deleteProject(project._id)} /> */}
              </Card.Content>
          </Card>
          ))}
        </Card.Group>
      ) : (
        <h3>No Results to Display</h3>
      )}
        </Jumbotron>
      </Container>
    );
  }
}


export default Projects;
