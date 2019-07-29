import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./../actions/types";

const INITIAL_STATE = {
  counter: 69
};

//all reducers follow this convention
export default function(state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, counter: state.counter +1};
    case DECREMENT_COUNTER:
      return {...state, counter: state.counter -1};
    default:
      return state;
  }
}
//defaults initial state unless passed in