import React, { Component } from "react";

import firebaseApp from "./firebase";
import TimeSlider from "./slider";

class DayView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: {},
      stars: 0
    };
  }

  componentDidMount() {
    this.linkToFirebase();
  }

  componentWillUnmount() {
    // Un-register the listener on '/someData'.
    this.firebaseRef.off("value", this.firebaseCallback);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.selectedDate !== prevProps.selectedDate) {
      this.linkToFirebase();
    }
  }

  render() {
    return <div>{this.events(this.state.events)}</div>;
  }

  linkToFirebase = () => {
    if (this.firebaseCallback)
      this.firebaseRef.off("value", this.firebaseCallback);

    this.baseRef = "events/" + this.props.selectedDate;
    console.log("Fetching events: " + this.baseRef);
    this.database = firebaseApp.database();
    this.firebaseRef = this.database.ref(this.baseRef);
    this.firebaseCallback = this.firebaseRef.on("value", snap => {
      console.log("Updating events from server: " + JSON.stringify(snap.val()));
      this.setState({ events: snap.val() });
    });
  };

  events = events => {
    var comps = [];
    for (var propKey in events) {
      if (events.hasOwnProperty(propKey)) {
        var eventData = events[propKey];
        comps.push(
          <Event
            data={eventData}
            key={propKey}
            index={propKey}
            database={this.database}
            baseRef={this.baseRef}
          />
        );
      }
    }
    return comps;
  };
}

class Event extends Component {
  constructor(props) {
    super(props);
  }

  updatePlayer = (player, index, range) => {
    console.log("Updating player: " + player);
    const playerRef =
      this.props.baseRef + "/" + this.props.index + `/participants/${index}`;
    console.log(playerRef);
    this.props.database.ref(playerRef + "/start").set(range[0]);
    this.props.database.ref(playerRef + "/end").set(range[1]);
  };

  participants = players => (
    <div>
      {players &&
        players.map((p, i) => (
          <div>
            <div className="fl">{p.name}</div>
            <TimeSlider
              player={p}
              playerIndex={i}
              timeChanged={this.updatePlayer}
            />
          </div>
        ))}
    </div>
  );

  render() {
    return (
      <div>
        <h2>
          {this.props.data.description} - {this.props.data.location}
        </h2>
        <hr />
        {this.participants(this.props.data.participants)}
        <div>
          <h2>Comments:</h2>
          <em>
            {this.props.data.comments &&
              this.props.data.comments.map((e, i) => (
                <div>
                  <span>{e.text}</span>
                  <br />
                </div>
              ))}
          </em>
        </div>
      </div>
    );
  }
}

export default DayView;
