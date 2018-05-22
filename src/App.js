import React, { Component } from 'react';
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
          <h1 className="App-title">iConcur</h1>
        </header>
        <p className="App-intro">
          To get started, select a date.
        </p>
        <div style={{float: 'left'}}>
          <Calendar onChange={this.onDateChange}/>
        </div>
        <div style={{float: 'left'}}>
          <DayView selectedDate={this.state.selectedDate}/>
        </div>
      </div>
    );
  }
}

export default App;
