import React, { Component } from "react";
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {    
      return (
        <div className="App">
          HelloWorld ,{this.props.name}
        </div>
      );
  }
}

export default HelloWorld;
