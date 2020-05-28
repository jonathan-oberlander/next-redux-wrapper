import { Actions, ActionTypes } from "./types";

const initialState = {
  message: '',
};

export const someReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case Actions.SEND_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case Actions.DELETE_MESSAGE:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};
