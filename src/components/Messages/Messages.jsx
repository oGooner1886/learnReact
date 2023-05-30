import s from "./Messages.module.css";
import MessageItem from "./MessageItem/MessageItem";
import UserItem from "./UserItem/UserItem";
const Messages = (props) => {




  const usersElements = props.state.users.map((user) => (
    <UserItem name={user.name} id={user.id} />
  ));

  const messagesElements = props.state.messages.map((message) => (
    <MessageItem value={message.value} />
  ));

  return (
    <div className={s.message}>
      <div className={s.messageUsers}>{usersElements}</div>
      <div className={s.messageDialogs}>{messagesElements}</div>
    </div>
  );
};

export default Messages;
