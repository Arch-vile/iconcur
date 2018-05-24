import "rc-slider/assets/index.css";
import React, { Component } from "react";
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

class TimeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: [props.player.start || 9, props.player.end || 12],
      player: props.player
    };
    this.valueChange = this.valueChange;
  }

  valueChange = newValue => {
    this.setState({ range: newValue });
    this.props.timeChanged(this.state.player);
  };

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
            value={[this.state.range[0], this.state.range[1]]}
          />
        </div>
      </div>
    );
  }
}

export default TimeSlider;
