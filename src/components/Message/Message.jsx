import s from './Message.module.css'
const Message = () => {
    return (
        <div className= {s.message}>
            <div className= {s.dialogs_left}>1</div>
            <div className={s.dialogs_right}>2</div>
        </div>
    )
}



export default Message