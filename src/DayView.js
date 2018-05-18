import React, { Component } from 'react';

import firebaseApp from './firebase';

class DayView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: {},
            stars: 0
        }
    }

    componentDidMount() {
        this.linkToFirebase();
    }

    componentWillUnmount() {
        // Un-register the listener on '/someData'.
        this.firebaseRef.off('value', this.firebaseCallback);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selectedDate !== prevProps.selectedDate) {
            this.linkToFirebase();
        }
    }


    render() {
        return <div> 
                <p>hello from day view - {this.props.selectedDate} - {this.state.stars   } </p> 
                {this.events(this.state.events)}
            </div>
    }

    linkToFirebase = () => {
        
        if(this.firebaseCallback) this.firebaseRef.off('value', this.firebaseCallback);
        
        var ref = 'events/' + this.props.selectedDate;
        console.log("Fetching events: " + ref);
        this.firebaseRef = firebaseApp.database().ref(ref);
        this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
            console.log('Updating events from server: ' + snap.val());
            this.setState({ events: snap.val() });
        });
    }

    events = (events) => {
        var comps = []
        for(var propKey in events) {
            if(events.hasOwnProperty(propKey)) {
                var eventData = events[propKey];
                comps.push(<Event data={eventData} key={propKey} />);
            }
        }
        return comps;
    }
}



class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>hello from event {this.props.data.description}</p>
    }
}


export default DayView