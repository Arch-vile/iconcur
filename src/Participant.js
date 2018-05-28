import React from "react";
import TimeSlider from "./slider";
import { connect } from "react-redux";

import { removeParticipant } from "./actions";

class Participant extends React.Component {
  remove = () => {
    this.props.removeParticipant(this.props.participant);
  };

  render() {
    return (
      <tr>
        <td>
          <div className="fl">{this.props.participant.name}</div>
        </td>
        <td>
          <TimeSlider participant={this.props.participant} />
        </td>
        <td>
          <button className="red" onClick={this.remove}>
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeParticipant: participant => dispatch(removeParticipant(participant))
  };
};

export default connect(state => state, mapDispatchToProps)(Participant);
