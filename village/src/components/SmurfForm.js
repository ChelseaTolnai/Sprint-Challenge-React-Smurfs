import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', this.state)
      .then( () => {this.props.updateSmurfList() })
      .then( () => {this.props.history.goBack() })
      .catch( err => {
        this.setState(err.response.data)
      })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        {this.state.Error && <h3>{this.state.Error}</h3>}
        <Form onSubmit={this.addSmurf}>
          <FormText><h3>Please fill in all fields to add a Smurf</h3></FormText>
          <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
                id="name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="age" sm={2}>Age</Label>
              <Col sm={10}>
                <Input
                  type="number"
                  onChange={this.handleInputChange}
                  placeholder="age"
                  value={this.state.age}
                  name="age"
                  id="age"
                />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="height" sm={2}>Height</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  onChange={this.handleInputChange}
                  placeholder="height (ex. 7cm)"
                  value={this.state.height}
                  name="height"
                  id="height"
                />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 1 }}>
              <Button type="submit">Add to the village</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
