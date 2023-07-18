import { Field, reduxForm } from "redux-form";
import s from "./Messages.module.css";

const MessagesForm = (props) => {
  debugger;
  return (
    <form onSubmit={props.handleSubmit}>
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
    </form>
  );
};
export const MessagesReduxForm = reduxForm({ form: "message" })(MessagesForm);

// export default MessagesForm;
