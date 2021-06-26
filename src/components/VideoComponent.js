import React, { Component } from 'react';
import Ram from './Ram.mp4';
import Battery from './Battery.mp4';
import Display from './Display.mp4';
import Looks from './Looks.mp4';

class Video extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <video width="100%" height="100%" id="full-screenVideo" controls>
                    <source src={Ram} type="video/mp4" height="10px" width="10px" />
                </video>
            </div>
        )
    }
}
export default Video;