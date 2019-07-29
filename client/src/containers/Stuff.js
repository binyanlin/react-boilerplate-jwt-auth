import React, {Component} from "react";
import Button from "./../components/Button/CounterButton";

class Stuff extends Component {
  state = {
    myFavNumba: 69
  }

  handleIncrement = () => {
    this.setState({myFavNumba: this.state.myFavNumba +1})
  }

  handleDecrement = () => {
    if (this.state.myFavNumba >= 1) {
      this.setState({myFavNumba: this.state.myFavNumba -1})
    }
  }
  
  render() {
    return (
      <div>
        <h1>My Favorite Numba: {this.state.myFavNumba}</h1>
        <Button handleClick={this.handleIncrement} class="btn-warning">Up</Button>
        <Button handleClick={this.handleDecrement} class="btn-info">Down</Button>
      </div>
    )
  } 
}

export default Stuff;