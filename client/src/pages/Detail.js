import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image} from "semantic-ui-react";
import Jumbotron from "../components/Jumbotron";
// import NoMatch from './NoMatch';
import API from "../utils/API";

class Detail extends Component {
  state = {
    project: {}
  };
  // When this component mounts, grab the project with the _id of this.props.match.params.id
  // e.g. localhost:3000/projects/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getProject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid> 
            <Jumbotron>
              <h1>
                {this.state.project.title}
              </h1>
              <Image src={this.state.project.image} centered circular/>
            </Jumbotron>
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.project.synopsis}
              </p>
            </article>
            <Link to="/">← Back to Authors</Link>
      </Container>
    );
  }
}

export default Detail;
