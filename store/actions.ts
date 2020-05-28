import { ActionTypes, Actions, Message } from "./types";

export const sendMessage = (payload: Message): ActionTypes => ({
  type: Actions.SEND_MESSAGE,
  payload,
});

export const deleteMessage = (): ActionTypes => ({
  type: Actions.DELETE_MESSAGE,
});
