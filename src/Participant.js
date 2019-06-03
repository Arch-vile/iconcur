import React from "react";
import TimeSlider from "./slider";
import { connect } from "react-redux";

import {togglePlayerEditability, removeParticipant} from "./actions";

class Participant extends React.Component {
  remove = () => {
    this.props.removeParticipant(this.props.participant);
  };

  edit = () => {
    this.props.togglePlayerEdit(this.props.participant);
  };

  cancel = () => {
    this.props.togglePlayerEdit(this.props.participant);
  }

  render() {
    return (
      <div className="h3">
        <div className="ac">
          {this.props.participant.name}&nbsp;
          { this.props.editable &&
          <span>
            <input type="submit" value="Delete" className='red' onClick={this.remove} />
            <input type="submit" value="OK" onClick={this.cancel} />
          </span>
            }
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
    togglePlayerEdit: participant => dispatch(togglePlayerEditability(participant))
  };
};

export default connect(state => state, mapDispatchToProps)(Participant);
