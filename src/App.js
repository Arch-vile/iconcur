import React, { Component } from "react";
import "./App.css";
import CalendarPanel from "./calendarPanel";
import DayView from "./DayView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <img height={30} src="sun.png" />
            Pollin kesäultimate
            <img height={30} src="sun.png" />
          </h1>
        </header>
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
