import React from "react";
import TimeSlider from "./slider";
import { connect } from "react-redux";

import {makeParticipantEditable, removeParticipant} from "./actions";

class Participant extends React.Component {
  remove = () => {
    this.props.removeParticipant(this.props.participant);
  };

  edit = () => {
    this.props.makeParticipantEditable(this.props.participant);
  };

  render() {
    return (
      <div className="h3">
        <div className="ac">
          {this.props.participant.name}&nbsp;
          { this.props.editable && <img src="delete.png" className="icon" onClick={this.remove} />}
          { !this.props.editable && <input type="submit" value="Edit" onClick={this.edit} /> }
        </div>
        <div className="">
          <TimeSlider participant={this.props.participant} editable={this.props.editable} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeParticipant: participant => dispatch(removeParticipant(participant)),
    makeParticipantEditable: participant => dispatch(makeParticipantEditable(participant))
  };
};

export default connect(state => state, mapDispatchToProps)(Participant);
