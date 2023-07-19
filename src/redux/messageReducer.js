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
};

const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.message;
      return{
      ...state,
      messages: [...state.messages, { id: 4, value: body }] //stateCopy.messages.push({ id: 4, value: body });
      
    }
  }
  return state;
};

export const sendMessageCreator = (message) => ({ type: SEND_MESSAGE, message });

export default messageReducer;
