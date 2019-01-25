import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import { Button} from 'reactstrap';
import SmurfNav from './components/SmurfNav'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then((res)=>{
      this.setState({
        smurfs: res.data,
      })  
    })
    .catch( err => {
      this.setState({
        ...this.state,
        error: `Error: ${err.response.status} - ${err.response.statusText} `
      })
    })
  }

  updateSmurfList = () => {
    this.componentDidMount();
  }

  render() {
    return (
      <div className="App">
        {this.state.error 
        ? <h2>{this.state.error}</h2> 
        : <div>
            <SmurfNav/>
            <Route 
              exact path="/smurf-form"
              render={props => 
                <SmurfForm {...props} updateSmurfList={this.updateSmurfList} />
              } 
            />
            <Route 
              exact path="/" 
              render={props => 
                <Smurfs {...props} smurfs={this.state.smurfs} updateSmurfList={this.updateSmurfList}/>
              } 
            />

            {this.props.location.pathname === "/" 
            ? <Link to="/smurf-form">
                <Button color="primary">Add Smurf</Button>
              </Link>
            : <Link to="/">
                <Button color="primary">View Smurf Village</Button>
              </Link>
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
