import React, { Component } from 'react';

class Video extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const path = 'Videos/' +  this.props.video + '.mp4';
        console.log(path)
        return (
            <div>
                <video width="100%" height="100%" id="full-screenVideo" controls>
                    <source src={path} type="video/mp4" height="10px" width="10px" />
                </video>
            </div>
        )
    }
}
export default Video;