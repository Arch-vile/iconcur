import React, { Component } from "react";
import "./App.css";
import CalendarPanel from "./calendarPanel";
import DayView from "./DayView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">iConcur</h1>
        </header>
        <p className="App-intro">To get started, select a date.</p>
        <div className="fl">
          <CalendarPanel />
        </div>
        <div className="fl">
          <DayView />
        </div>
      </div>
    );
  }
}

export default App;
