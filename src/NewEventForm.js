import React from "react";
import { connect } from "react-redux";
import { addEvent } from "./actions";

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      location: ""
    };
  }

  handleSubmit = event => {
    this.props.addEvent(
      this.props.date,
      this.state.description,
      this.state.location
    );
    this.setState({ description: "", location: "" });
    event.preventDefault();
  };

  handleDescriptionChange = event => {
    this.setState({ ...this.state, description: event.target.value });
  };

  handleLocationChange = event => {
    this.setState({ ...this.state, location: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add new event</h3>
        <input
          placeholder="Location"
          value={this.state.location}
          onChange={this.handleLocationChange}
        />
        <input
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <input type="submit" value="New event" />
      </form>
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
    addEvent: (date, description, location) =>
      dispatch(addEvent(date, description, location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEventForm);
