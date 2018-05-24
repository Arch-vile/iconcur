import React from "react";
import { connect } from "react-redux";
import Calendar from "rc-calendar";
import "rc-calendar/assets/index.css";
import { dataChanged } from "./actions";

const CalendarPanel = props => (
  <div>
    Current date: {props.date}
    <Calendar onChange={props.onChange} />
  </div>
);

const mapStateToProps = state => {
  return {
    date: state.calendarDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: newDate => dispatch(dataChanged(newDate.format("YYYY-MM-DD")))
  };
};

const foobar = connect(mapStateToProps, mapDispatchToProps)(CalendarPanel);

export default foobar;
