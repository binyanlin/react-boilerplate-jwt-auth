import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./types";

//action creators return an OBJECT that has a TYPE PROPERTY that tells workflow what to fire
export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
};

