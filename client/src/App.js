import React from 'react';
import axios from "axios";
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
      <div>
      <h1>Soccer Data</h1>
      </div>
      
      <div>
        {this.state.playerData.map(player=>{
          return (
            <Card 
            key = {player.id}
            name = {player.name}
            country = {player.country}
            />
          )
        })}  
      </div>
    </div>
  );
}
}
export default App;
