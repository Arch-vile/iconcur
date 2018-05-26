import React from "react";
import { connect } from "react-redux";
import Event from "./Event";

const DayView = ({ date, events }) => (
  <div>
    <div>Current date: {date}</div>
    {events.map(event => {
      return <Event key={event.ref} event={event} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    date: state.calendarDate,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onChange: newDate => dispatch(dataChanged(newDate.format("YYYY-MM-DD")))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
