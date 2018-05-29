import React from "react";
import { connect } from "react-redux";
import Event from "./Event";
import NewEventForm from "./NewEventForm";
import { dataChanged } from "./actions";
import moment from "moment";

class DayView extends React.Component {
  render() {
    return (
      <div className="mb2">
        <button onClick={this.today}>Home</button>
        <h1>
          <img src="arrowLeft.png" className="icon" onClick={this.prevDay} />
          &nbsp;{this.props.date.format("ddd DD.MM.YYYY")}&nbsp;
          <img src="arrowRight.png" className="icon" onClick={this.nextDay} />
        </h1>
        {this.props.loading && <h2>Loading.....</h2>}
        {!this.props.loading &&
          this.props.events.map(event => {
            return <Event key={event.ref} event={event} />;
          })}
        <hr />
        <NewEventForm />
      </div>
    );
  }

  today = () => {
    this.props.dataChanged(moment().format("YYYY-MM-DD"));
  };

  prevDay = () => {
    this.props.dataChanged(
      this.props.date.subtract(1, "days").format("YYYY-MM-DD")
    );
  };

  nextDay = () => {
    this.props.dataChanged(this.props.date.add(1, "days").format("YYYY-MM-DD"));
  };
}

const mapStateToProps = state => {
  return {
    date: moment(state.calendarDate),
    events: state.events,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dataChanged: newDate => dispatch(dataChanged(newDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayView);
