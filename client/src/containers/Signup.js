import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signup } from "../actions";
import validator from "validator";

class Signup extends Component {


  renderError = ({error, touched}) => {
    if(touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      )
    }
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

  onSubmit = (formProps) => {
    // {email, password}
    console.log(formProps);
    this.props.signup(formProps, () => {
      this.props.history.push('/counter'); //props.history comes from react-router, .push pushes router to whatever is passed in
    });
  }
  
  render() {
    console.log(this.props);
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
        <button>Signup</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
};

const validate = formValues => { //reduxform will display errors
  const errors = {};
  // console.log("validator", formValues);

  if (!formValues.email) {
    errors.email = "You must enter an email";
  } 

  if (formValues.email) {
    if (!validator.isEmail(formValues.email)) {
      errors.email = "You must enter a valid email address";
  }

  } if (!formValues.password) {
    errors.password = "You must enter a password"
  }
  return errors;
}

export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({
    form: "signup",
    validate})
)(Signup);