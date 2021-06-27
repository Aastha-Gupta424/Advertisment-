import React, { Component } from 'react';
import { Row ,Col } from 'reactstrap';
import Looks from './looks.jpg';
import Battery from './battery.jpg';
import Ram from './ram.jpg';
import Display from './display.jpg';
import Video from './VideoComponent';

class Body extends Component {

  constructor(props) {
    super(props);
  }

    state={
      videoName: '',
      visible:false

}

toggleState = (name) => {
  if(this.state.visible === false){
      this.setState({visible:true})
      this.setState({videoName: name})
  }
  else{
      this.setState({visible:false})
      this.setState({videoName: ''})
  }
}

  render() {
    return (
      <>
      {(this.state.visible && this.state.videoName !== '')
        ? <Video video={this.state.videoName} />
        : (
          <div className="main">
          <div>
            <Row>
  
              <Col className="bord">
              <img onClick={() => this.toggleState('Looks')} className="img" src={Looks}/>
  
                <center>
                <h2 className="highlight">
                  Explore Looks
                </h2>
                </center>
              </Col>
              
              <Col className="bord">
              <img onClick={() => this.toggleState('Display')} className="img" src={Display}/>
                <center>
                <h2 className="highlight">
                  Screen Display
                </h2>
                </center>
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="bord">
              <img onClick={() => this.toggleState('Ram')} className="img" src={Ram}/>
                <center>
                <h2 className="highlight">
                  Ram Configuration
                </h2>
                </center>
              </Col>
              
              <Col className="bord">
              <img onClick={() => this.toggleState('Battery')} className="img" src={Battery}/>
                <center>
                <h2 className="highlight">
                  Battery Power
                </h2>
                </center>
              </Col>
            </Row>
          </div>
        </div>
        )}
      </>
    )
  }
}
export default Body;