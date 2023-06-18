const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  messages: [
    { id: 1, value: "Hi" },
    { id: 2, value: "How are you?" },
    { id: 3, value: "My name is ..." },
  ],
  users: [
    { id: 1, name: "Sergey" },
    { id: 2, name: "Veronika" },
    { id: 3, name: "Liza" },
  ],
  newMessageBody: [],
};

const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return{ 
      ...state,
      newMessageBody: action.body,
    }
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      return{
      ...state,
      newMessageBody : "",
      messages: [...state.messages, { id: 4, value: body }] //stateCopy.messages.push({ id: 4, value: body });
      
    }
  }
  return state;
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default messageReducer;
