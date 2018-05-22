import React, { Component } from "react";

import firebaseApp from "./firebase";

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

    var ref = "events/" + this.props.selectedDate;
    console.log("Fetching events: " + ref);
    this.firebaseRef = firebaseApp.database().ref(ref);
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
        comps.push(<Event data={eventData} key={propKey} />);
      }
    }
    return comps;
  };
}

class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.data.description} - {this.props.data.location}
        </h2>
        <hr />
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
