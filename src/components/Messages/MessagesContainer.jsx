import { connect } from "react-redux";
import {
  sendMessageCreator
} from "../../redux/messageReducer";
import Messages from "./Messages";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};

const AuthRedirectComponent = withAuthRedirect(Messages); //!HOC


const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageCreator(message));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages)