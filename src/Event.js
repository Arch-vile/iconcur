import React, { Component } from "react";
import { connect } from "react-redux";
import Participant from "./Participant";

const Event = ({ event }) => (
  <div>
    <h2>
      {event.description} - {event.location}
    </h2>
    <hr />
    {event.participants &&
      event.participants.map(participant => (
        <Participant participant={participant} />
      ))}
    <div>
      <h2>Comments:</h2>
      <em>
        {event.comments &&
          event.comments.map((e, i) => (
            <div>
              <span>{e.text}</span>
              <br />
            </div>
          ))}
      </em>
    </div>
  </div>
);

export default Event;
