import React from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Smurf = props => {
  function deleteSmurf(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${props.id}`)
      .then( () => {props.updateSmurfList() })
      .catch( err => {console.log(err)})
  }
  return (
    <div className="Smurf">
      <Card body inverse color="primary">
        <CardTitle><h4>{props.name}</h4></CardTitle>
        <CardText>{props.height} tall</CardText>
        <CardText>{props.age} smurf years old</CardText>
        <Button color="secondary">Edit</Button>
        <Button color="secondary" onClick={deleteSmurf}>Delete</Button>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

