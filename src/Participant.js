import React, { Component } from "react";
import { connect } from "react-redux";
import TimeSlider from "./slider";

const Participant = ({ participant }) => (
  <div>
    <div className="fl">{participant.name}</div>
    <TimeSlider participant={participant} />
  </div>
);

export default Participant;
