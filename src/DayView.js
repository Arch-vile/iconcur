import React from "react";
import { connect } from "react-redux";
import Event from "./Event";
import NewEventForm from "./NewEventForm";

const DayView = ({ date, events, loading }) => (
  <div className="mb2">
    <h1>{date}</h1>
    {loading && <h2>Loading.....</h2>}
    {!loading &&
      events.map(event => {
        return <Event key={event.ref} event={event} />;
      })}
    <hr />
    <NewEventForm />
  </div>
);

const mapStateToProps = state => {
  return {
    date: state.calendarDate,
    events: state.events,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onChange: newDate => dispatch(dataChanged(newDate.format("YYYY-MM-DD")))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
