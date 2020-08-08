// all actions enum
export enum Actions {
  SEND_MESSAGE = "SEND_MESSAGE",
  DELETE_MESSAGE = "DELETE_MESSAGE",
  UPDATE_MESSAGE = "UPDATE_MESSAGE",
}

// base types
export type Message = string;

// action types
interface SendMessageAction {
  type: typeof Actions.SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof Actions.DELETE_MESSAGE;
}

export interface UpdateMessageAction {
  type: typeof Actions.UPDATE_MESSAGE;
  payload: Message;
}

// all types union
export type ActionTypes =
  | SendMessageAction
  | DeleteMessageAction
  | UpdateMessageAction;
