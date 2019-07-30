import React, {Component} from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./../actions";

import requireAuth from "./../hoc/requireAuth";

class Counter extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.incrementCounter} class="btn-primary">Increment</button>
        <button onClick={this.props.decrementCounter} class="btn-secondary">Decrement</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { counter: state.counter.counter };
};

export default requireAuth(connect(mapStateToProps, { incrementCounter, decrementCounter })(Counter));
