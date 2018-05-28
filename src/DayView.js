import React from "react";
import { connect } from "react-redux";
import Event from "./Event";
import NewEventForm from "./NewEventForm";

const DayView = ({ date, events }) => (
  <div className="mb2">
    <h1>{date}</h1>
    {events.map(event => {
      return <Event key={event.ref} event={event} />;
    })}
    <hr />
    <NewEventForm />
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
