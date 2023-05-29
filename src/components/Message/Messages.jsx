import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'

const User = (props) => {
  return (
    <div className={s.user}>
      <NavLink to={'/message/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className="dialog">{props.value}</div>
  )
}

const userData = [
  {id: 1, name: 'Sergey'},
  {id: 2, name: 'Veronika'},
  {id: 3, name: 'Liza'},
]
const messageData = [
  {value: 'Hi'},
  {value: 'How are you?'},
  {value: 'My name is ...'},
]


const Messages = () => {
  return (
    <div className={s.message}>
      <div className={s.messageUsers}>
        <User name={userData[0].name} id={userData[0].id}/>
        <User name={userData[1].name} id={userData[1].id}/>
        <User name={userData[2].name} id={userData[2].id}/>
      </div>
      <div className={s.messageDialogs}>
        <Message value={messageData[0].value}/>
        <Message value={messageData[1].value}/>
        <Message value={messageData[2].value}/>
      </div>
    </div>
  );
};



export default Messages