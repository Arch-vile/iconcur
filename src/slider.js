import "rc-slider/assets/index.css";
import React from "react";
import { connect } from "react-redux";
import { updateParticipant } from "./actions";

import Slider from "rc-slider";

const style = { width: 400, marginLeft: 20, marginBottom: 20 };
const marks = {
  "9": "09:00",
  "10": "10:00",
  "11": "11:00",
  "12": "12:00",
  "13": "13:00",
  "14": "14:00",
  "15": "15:00",
  "16": "16:00",
  "17": "17:00",
  "18": "18:00",
  "19": "19:00",
  "20": "20:00"
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
      <div className="fl">
        <div style={style}>
          <Slider.Range
            min={9}
            max={20}
            marks={marks}
            step={0.5}
            onChange={this.valueChange}
            defaultValue={[9, 12]}
            value={[this.state.start || 9, this.state.end || 12]}
          />
        </div>
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
