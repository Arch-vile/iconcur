import React, { Component } from 'react';

class DayView extends Component {
    render() {
        return <p>hello from day view - {this.props.selectedDate} -</p>
    }
}

export default DayView