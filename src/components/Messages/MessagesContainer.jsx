import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messageReducer";
import Messages from "./Messages";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
    isAuth: state.auth.isAuth
  };
};
const AuthRedirectComponent = withAuthRedirect(Messages)
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default MessagesContainer;
