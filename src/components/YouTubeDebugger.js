// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
                //resolution: '720p'
            }
        })
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.handleBitRate}></button>
            <button className='resolution' onClick={this.handleResolution}></button>
            </div>
            )
    }
}

export default YouTubeDebugger