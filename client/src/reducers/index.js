import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./auth";
import counter from "./counter";

export default combineReducers({
  form : form,
  counter : counter,
  auth : auth
})


