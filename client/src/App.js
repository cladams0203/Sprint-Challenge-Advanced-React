import React from 'react';
import axios from 'axios';
import { PlayerContainer } from './components/PlayerContainer';
import './App.css';
// import '../node_modules/react-vis/dist/styles.css';
import {XYPlot, LineSeries} from 'react-vis';


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
    const data = [
      {x:0, y:8},
      {x:1, y:5},
      {x:2, y:2}
      
    ]
    return (
      <div className='container'>
        <h1>World Cup Players</h1>
        <XYPlot height={200} width={200} className='graph'>
          <LineSeries data={data} />
        </XYPlot>
        <PlayerContainer players={this.state.data}/>
      </div>
    )
  }
}

export default App;
