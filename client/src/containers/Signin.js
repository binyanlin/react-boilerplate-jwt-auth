import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signin } from "../actions";

class Signin extends Component {

  onSubmit = formValues => {
    this.props.signin(formValues, () => {
      this.props.history.push("/counter")
    })
  }

  renderInput = ({input, label, meta}) => {
    // console.log(meta);
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props; //pulls out handleSubmit from redux-form
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          {/* <label>Email</label> */}
          <Field
            name="email"
            type="text"
            label="Email"
            component={this.renderInput}
            autoComplete= ""
          />
        </fieldset>
        <fieldset>
          {/* <label>Password</label> */}
          <Field
            name="password"
            type="password"
            label="Password"
            component={this.renderInput}
            autoComplete= ""
          />
        </fieldset>
        <button>Signin</button>
        <div>{this.props.errorMessage}</div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(mapStateToProps, {signin}),
  reduxForm({form: "signin"})
)(Signin)