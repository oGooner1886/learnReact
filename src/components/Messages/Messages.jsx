import s from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import UserItem from "./UserItem/UserItem";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLength, required } from "../../utils/validators";

const Messages = (props) => {
  const state = props.messagePage;

  const usersElements = state.users.map((user) => (
    <UserItem name={user.name} id={user.id} />
  ));

  const messagesElements = state.messages.map((message) => (
    <MessageItem value={message.value} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.message);
  };

  const MessagesReduxForm = reduxForm({ form: "messageForm" })(MessagesForm);
  return (
    
      <div className={s.message}>
        <div className={s.messageUsers}>{usersElements}</div>
        <div>
          <div className={s.messageDialogs}>{messagesElements}</div>
          <MessagesReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
  
  );
};
const maxLength100 = maxLength(100)
const MessagesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field
            placeholder="Enter your message"
            name={"message"}
            component={Textarea}
            validate={[required, maxLength100]}
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      </form>
    
  );
};

export default Messages;
