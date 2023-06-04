import s from './Header.module.css'
import search_ico from './img/Ellipse.svg'
import notification_ico from './img/ico-notifications.svg'
import settings_ico from './img/Settings.svg'
import lightMode_ico from './img/Toggle Off1.svg'


const Header = () => {
    return (
        <header className = {s.header}>
            
                <div className={s.header_search}>
                    <img className={s.search_ico} src={search_ico} />
                    <input className={s.search} type="text" placeholder='Search...'/>
                </div>
                <div className={s.header_toolbar}>
                    <div className={s.toolbar_notification}>
                        <img className={s.toolbar_ico} src={notification_ico} />
                    </div>
                    <div className={s.toolbar_settings}>
                        <img className={s.toolbar_ico} src={settings_ico} />
                    </div>
                    <div className={s.toolbar_lightMode}>
                        <img className={s.toolbar_ico} src={lightMode_ico} />
                    </div>

                </div>
            
        </header>
    )
}


export default Header