import React from "react";
import Participant from "./Participant";
import NewParticipantForm from "./NewParticipantForm";
import NewCommentForm from "./NewCommenForm";

const Event = ({ event }) => (
  <div>
    <h2>
      {event.description} @ {event.location}
    </h2>
    <hr />
    <div>
      <table>
        <tbody>
          {event.participants &&
            event.participants.map(participant => (
              <Participant key={participant.ref} participant={participant} />
            ))}
        </tbody>
      </table>
    </div>
    <NewParticipantForm event={event} />
    <div className="al">
      <h2>Comments:</h2>
      <em>
        {event.comments &&
          event.comments.map(c => (
            <div key={c.ref}>
              <span>{c.text}</span>
              <br />
            </div>
          ))}
      </em>
      <NewCommentForm event={event} />
    </div>
  </div>
);

export default Event;
