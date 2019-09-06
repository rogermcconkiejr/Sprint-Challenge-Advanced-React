import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import Card from './Card';

class App extends React.Component {
  state = {
    playerData: []
  };
  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then((response) => {
        console.log('data:', response)
        this.setState({playerData: response.data})
      })
      .catch(err => console.log('error'));
    }
  render () {
  return (
    <div className="App">
      <h1>Soccer Data</h1>
      <Card 
      id = {this.state.playerData.id}
      playerName = {this.state.playerData.name}
      playerCountry = {this.state.playerData.country}
      />
    </div>
  );
}
}
export default App;
