import React from 'react';
import axios from 'axios';
import { PlayerContainer } from './components/PlayerContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
    
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({data: res.data})
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className='container'>
        <h1>World Cup Players</h1>
        <PlayerContainer players={this.state.data}/>
      </div>
    )
  }
}

export default App;
