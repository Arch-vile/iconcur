import React from "react";
import TimeSlider from "./slider";

const Participant = ({ participant }) => (
  <tr>
    <td>
      <div className="fl">{participant.name}</div>
    </td>
    <td>
      <TimeSlider participant={participant} />
    </td>
  </tr>
);

export default Participant;
