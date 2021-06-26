import React, { Component } from 'react';
import Body from './BodyComponent';
class Main extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
          <Body />
      </div>
    )
  }
}
export default Main;