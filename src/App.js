import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from 'rc-calendar';
import DayView from './DayView'
import 'rc-calendar/assets/index.css';
import moment from 'moment';


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: moment().format('YYYY-MM-DD'),
      foo: 'bar'
    };
  }
  
  onDateChange = (newDate) => { 
    console.log("Clicked date: " + newDate.format('YYYY-MM-DD')); 
    this.setState({ selectedDate: newDate.format('YYYY-MM-DD') });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Calendar onChange={this.onDateChange}/>
        <DayView selectedDate={this.state.selectedDate}/>
      </div>
    );
  }
}

export default App;
