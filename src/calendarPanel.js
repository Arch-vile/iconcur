import React from "react";
import { connect } from "react-redux";
import Calendar from "rc-calendar";
import "rc-calendar/assets/index.css";
import { dataChanged } from "./actions";
import moment from "moment";

class CalendarPanel extends React.Component {
  onChange = newDate => {
    console.log("Clicked on calendar: " + newDate);
    this.props.onChange(newDate.format("YYYY-MM-DD"));
  };

  render() {
    return (
      <div className="m2">
        <Calendar value={moment(this.props.date)} onChange={this.onChange} />
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
    onChange: newDate => dispatch(dataChanged(newDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPanel);
