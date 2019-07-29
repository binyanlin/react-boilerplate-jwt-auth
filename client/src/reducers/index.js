import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import counter from "./counter";

export default combineReducers({
  form: form,
  counter : counter
})


