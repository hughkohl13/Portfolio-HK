import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "semantic-ui-react";
import { Input, FormBtn } from "../components/Form";
// import { UploadFile } from '../components/UploadBtn';
import axios from 'axios';
import './style.css'



class Add extends Component {
  state = {
    projects: [],
    title: "",
    tech: "",
    synopsis: "",
    file: null
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
    if (this.state.title) {
      API.saveProject({
        title: this.state.title,
        tech: this.state.tech,
        synopsis: this.state.synopsis,
        image: this.state.image
      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };

  fileSelectedHandler = event => {
    this.setState({
      image: event.target.files[0]
    });
    console.log(event.target.files[0]);
  }

  onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("/upload",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });
}
onChange(e) {
    this.setState({file:e.target.files[0]});
}


  render() {
    return (
      <Container fluid>
          <Jumbotron>
            <h1>Upload a project.</h1>
          </Jumbotron>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              value={this.state.synopsis}
              onChange={this.handleInputChange}
              name="synopsis"
              placeholder="Synopsis (required)"
            />
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
            <FormBtn
              disabled={!(this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit Project
            </FormBtn>
          </form>
      </Container>
    );
  }
}

export default Add;