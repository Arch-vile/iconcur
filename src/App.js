import React, { Component } from "react";
import "./App.css";
import CalendarPanel from "./calendarPanel";
import DayView from "./DayView";
import { dataChanged } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount = () => {
    this.props.setDate(this.props.date);
  };

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
        <div>
          <DayView />
        </div>
        <hr />
        <div>
          <h4>Tips and tricks</h4>
          <ul>
            <li className="al">
              URL will change when you change date, so you can share a link to
              the day by just copying the url.
            </li>
            <li className="al">
              Page will autoreload the data, so there is no need for you to
              reload.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    date: state.calendarDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDate: newDate => dispatch(dataChanged(newDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
