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
          { /* <img src="delete.png" className="icon" onClick={this.removeEvent} /> */}
        </h2>
        <h4>
          {this.props.event.participants &&
            this.props.event.participants.length + " players"}
        </h4>
        <hr />
        <div>
          {this.props.event.participants &&
            this.props.event.participants.map(participant => (
              <Participant key={participant.ref} participant={participant} editable={ this.props.editablePlayers.includes(participant.name)   }/>
            ))}
        </div>
        <br />
        <NewParticipantForm event={this.props.event} />
        <div className="al">
          <h2>Comments:</h2>
          <em>
            {this.props.event.comments &&
              this.props.event.comments.map(c => (
                <ul key={c.ref}>
                  <li>{c.text}</li>
                  <br />
                </ul>
              ))}
          </em>
          <NewCommentForm event={this.props.event} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    editablePlayers: state.editablePlayers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeEvent: event => dispatch(removeEvent(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
