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
      <div className="h3">
        <div className="ac">
          {this.props.participant.name}
          <img src="delete.png" className="icon" onClick={this.remove} />
        </div>
        <div className="">
          <TimeSlider participant={this.props.participant} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeParticipant: participant => dispatch(removeParticipant(participant))
  };
};

export default connect(state => state, mapDispatchToProps)(Participant);
