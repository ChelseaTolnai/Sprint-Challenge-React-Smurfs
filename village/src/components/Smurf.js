import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Card body inverse color="primary">
        <CardTitle><h4>{props.name}</h4></CardTitle>
        <CardText>{props.height} tall</CardText>
        <CardText>{props.age} smurf years old</CardText>
        <Button color="light"><strong>Edit</strong></Button>
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

