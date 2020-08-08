import { ActionTypes, Actions, Message, UpdateMessageAction } from "./types";

export const sendMessage = (payload: Message): ActionTypes => ({
  type: Actions.SEND_MESSAGE,
  payload,
});

export const deleteMessage = (): ActionTypes => ({
  type: Actions.DELETE_MESSAGE,
});

export const updateMessage = (payload: Message): ActionTypes => ({
  type: Actions.UPDATE_MESSAGE,
  payload,
});
