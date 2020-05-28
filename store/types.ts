// all actions enum
export enum Actions {
  SEND_MESSAGE = 'SEND_MESSAGE',
  DELETE_MESSAGE = 'DELETE_MESSAGE',
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

// all types union
export type ActionTypes = SendMessageAction | DeleteMessageAction;
