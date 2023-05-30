import React from "react";
import s from "./../Messages.module.css";

const MessageItem = (props) => {

  const newMessageElement = React.createRef()
  const addMessage = () => {
    const text = newMessageElement.current.value
    alert(text)
  }


  return (
    <div className={s.dialog}>
      <ul>
        <li>{props.value}</li>
      </ul>
      <div className={s.messageItem_send}>
        <textarea ref={newMessageElement}></textarea>
        <button className={s.messageItem_btn} onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default MessageItem;
