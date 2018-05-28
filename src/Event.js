import React from "react";
import Participant from "./Participant";
import { connect } from "react-redux";
import NewParticipantForm from "./NewParticipantForm";
import NewCommentForm from "./NewCommenForm";
import { removeEvent } from "./actions";

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  removeEvent = actionEvent => {
    console.log("REMOVING!!!!!!!!!!!");
    this.props.removeEvent(this.props.event);
  };

  render() {
    return (
      <div className="event">
        <h2>
          {this.props.event.description} @ {this.props.event.location}
          <img src="delete.png" className="icon" onClick={this.removeEvent} />
        </h2>
        <hr />
        <div>
          {this.props.event.participants &&
            this.props.event.participants.map(participant => (
              <Participant key={participant.ref} participant={participant} />
            ))}
        </div>
        <br />
        <NewParticipantForm event={this.props.event} />
        <div className="al">
          <h2>Comments:</h2>
          <em>
            {this.props.event.comments &&
              this.props.event.comments.map(c => (
                <div key={c.ref}>
                  <span>{c.text}</span>
                  <br />
                </div>
              ))}
          </em>
          <NewCommentForm event={this.props.event} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeEvent: event => dispatch(removeEvent(event))
  };
};

export default connect(state => state, mapDispatchToProps)(Event);
