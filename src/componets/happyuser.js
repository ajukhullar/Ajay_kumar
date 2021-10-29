import React, { Component } from "react";

class Happy extends Component {
  constructor(props) {
    super(props);

    this.state = { seconds: 0 };
  }
  tick() {
    if (this.state.seconds < 100) {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
      } else {
        clearInterval(this.interval);
      }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div> {this.state.seconds}</div>;
  }
}

export default Happy;