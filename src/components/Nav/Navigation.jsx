import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
const Navigation = () => {
    return (
        <nav className = {s.nav}>
          <div>
            <img className={s.logo} src = 'https://storage.needpix.com/rsynced_images/logo-3266214_1280.png' />
            
          </div>
        <div className= {s.item}>
          <NavLink to='/profile' className= {({isActive}) => isActive ? s.active : s.item}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/message' className= {({isActive}) => isActive ? s.active : s.item}>
            Message
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className= {({isActive}) => isActive ? s.active : s.item}>
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className= {({isActive}) => isActive ? s.active : s.item}>
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className= {({isActive}) => isActive ? s.active : s.item}>
            Settings
          </NavLink>
        </div>
        {/* <div className={s.item}>
          <NavLink to='/settings' className= {({isActive}) => isActive ? s.active : s.item}>
            Friends
          </NavLink>
        </div> */}
      </nav>
    )
}

export default Navigation