import s from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import UserItem from "./UserItem/UserItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../redux/messageReducer';
const Messages = (props) => {
  
  const state = props.store.getState().messagePage
  
  const usersElements = state.users.map((user) => (
    <UserItem name={user.name} id={user.id} />
  ));

  const messagesElements = state.messages.map((message) => (
    <MessageItem value={message.value} />
  ));

  
  const newMessageBody = state.newMessageBody

  const onNewMessageChange = (event) => {
    const body = event.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
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

