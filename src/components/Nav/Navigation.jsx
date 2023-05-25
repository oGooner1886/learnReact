import s from './Navigation.module.css'
const Navigation = () => {
    return (
        <nav className = {s.nav}>
        <div className= {s.item}>
          <a href='/profile'>
            Profile
          </a>
        </div>
        <div className={s.item}>
          <a href='/message'>
            Message
          </a>
        </div>
        <div className={s.item}>
          <a href='/news'>
            News
          </a>
        </div>
        <div className={s.item}>
          <a href='/music'>
            Music
          </a>
        </div>
        <div className={s.item}>
          <a href='/settings'>
            Settings
          </a>
        </div>
      </nav>
    )
}

export default Navigation