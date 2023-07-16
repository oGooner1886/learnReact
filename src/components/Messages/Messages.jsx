import s from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import UserItem from "./UserItem/UserItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/messageReducer';
import { Navigate } from "react-router-dom";

const Messages = (props) => {
  
  const state = props.messagePage
  
  const usersElements = state.users.map((user) => (
    <UserItem name={user.name} id={user.id} />
  ));

  const messagesElements = state.messages.map((message) => (
    <MessageItem value={message.value} />
  ));

  
  const newMessageBody = state.newMessageBody

  const onNewMessageChange = (event) => {
    const body = event.target.value
    props.updateNewMessageBody(body)
    // props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  const onSendMessageClick = () => {
    props.sendMessage()
  }
  
  return (
    <div className={s.message}>
      <div className={s.messageUsers}>{usersElements}</div>
      <div className={s.messageDialogs}>
        {messagesElements}
        <div>
          <div>
            <textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange}></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;

