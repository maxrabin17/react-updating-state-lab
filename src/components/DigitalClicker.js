// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor(){
        super();
        this.state = {
            timesClicked: 0,
        }
    }
    
    handleClick = () => {
        // let newTimesClicked = this.state.timesClicked + 1
        this.setState({
            timesClicked: this.state.timesClicked + 1
            //timesClicked: newTimesClicked
        })
    } 

    render() {
        return (
            <button onClick = {this.handleClick} >{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
