import React, { Component } from 'react';

import firebaseApp from './firebase';

class DayView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            stars: 0
        }
    }

    componentDidMount() { 
        this.firebaseRef = firebaseApp.database().ref('posts/' + 1 + '/starCount');
        this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
            this.setState({ stars: snap.val() });
        });
    }
    render() {
        return <p>hello from day view - {this.props.selectedDate} - {this.state.stars   } </p>
    }
}

export default DayView