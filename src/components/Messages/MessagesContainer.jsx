import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messageReducer";
import Messages from "./Messages";

// const Message1sContainer = (props) => {
//   const state = props.store.getState().messagePage;

//   const onNewMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   const onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   return (
//     <Messages
//       updateNewMessageBody={onNewMessageChange}
//       sendMessage={onSendMessageClick}
//       messagePage={state}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;
