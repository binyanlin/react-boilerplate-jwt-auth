import React, { Component } from "react";
import { connect } from "react-redux";


export default ChildComponent => {
  class ComposedComponent extends Component{
    componentDidMount() {
      this.shouldNavigateAway();
    }
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if(!this.props.auth){
        console.log("shouldnavigateaway is being hit but not firing?")
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props}/>
    }
  }

  function mapStateToProps({ auth }) {
    return {auth: auth.authenticated};
  }

  return connect(mapStateToProps, null)(ComposedComponent);
}