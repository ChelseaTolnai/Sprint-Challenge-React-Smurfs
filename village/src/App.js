import React, { Component } from 'react';

import './App.css';
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

  render() {
    return (
      <div className="App">
        {this.state.error 
        ? <h2>{this.state.error}</h2> 
        : <div>
            <SmurfForm />
            <Smurfs smurfs={this.state.smurfs} />
          </div>
        }
      </div>
    );
  }
}

export default App;
