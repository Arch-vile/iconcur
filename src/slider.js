import "rc-slider/assets/index.css";
import React from "react";
import { connect } from "react-redux";
import { updateParticipant } from "./actions";

import Slider from "rc-slider";

const marks = {
  "12": "12",
  "13": "13",
  "14": "14",
  "15": "15",
  "16": "16",
  "17": "17",
  "18": "18",
  "19": "19",
  "20": "20",
  "21": "21"
};

class TimeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.participant };
    this.valueChange = this.valueChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return { ...props.participant };
  }

  valueChange(newRange) {
    const newState = {
      ...this.state,
      start: newRange[0],
      end: newRange[1]
    };

    this.setState(state => {
      console.log("new state: " + JSON.stringify(newState));
      return newState;
    });

    this.props.foo(newState);
  }

  render() {
    return (
      <div className="slider">
        <Slider.Range
          vertical={false}
          min={12}
          max={21}
          marks={marks}
          step={0.5}
          onChange={this.valueChange}
          defaultValue={[18, 20]}
          value={[this.state.start || 18, this.state.end || 20]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    foo: participant => dispatch(updateParticipant(participant))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlider);
