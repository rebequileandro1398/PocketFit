import {
    EXERCISE
  } from "../Actions/actions-Prueba";
  
  const initialState = {
    exercise: []
  };
  
  function reducerTraining(state = initialState, action) {
    switch (action.type) {
      case EXERCISE:
        return {
          ...state,
          exercise: action.payload[0]
        };
  
      default:
        return state;
    }
  }
  
  export default reducerTraining;