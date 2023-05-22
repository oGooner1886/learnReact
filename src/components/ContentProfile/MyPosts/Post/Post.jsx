import s from './Post.module.css'
const Post = (props) => {
    return (
      <div className={s.item}>
        <br />
        <img src='https://w7.pngwing.com/pngs/464/554/png-transparent-account-avatar-profile-user-avatars-icon.png'></img>
        <span>{props.message}</span>
        <div><span><button>like - {props.value}</button></span></div>
        
      </div>
    )
}
export default Post