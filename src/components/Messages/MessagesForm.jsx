import { Field, reduxForm } from "redux-form";
import s from "./Messages.module.css";

const MessagesForm = (props) => {
  return (
   
      <div>
        <div>
          <Field
            placeholder="Enter your message"
            name={"message"}
            component={"textarea"}
            value={props.newMessageBody}
            onChange={props.onNewMessageChange}
          />
        </div>
        <div>
          <button onClick={props.onSendMessageClick}>Send</button>
        </div>
      </div>
    
  );
};
export const MessagesReduxForm = reduxForm({ form: "messageForm" })(MessagesForm);

// export default MessagesForm;
