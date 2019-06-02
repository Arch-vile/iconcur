import React from "react";
import { connect } from "react-redux";
import { addParticipant } from "./actions";

class NewParticipantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleSubmit = event => {
    this.props.addParticipant(this.props.event, this.state.name);
    this.setState({ name: "" });
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
      <hr/>
      <br/>
      <span>To participate, first add your name: </span>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add me!" />
      </form>
      <hr/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addParticipant: (event, name) => dispatch(addParticipant(event, name))
  };
};

export default connect(state => state, mapDispatchToProps)(NewParticipantForm);
