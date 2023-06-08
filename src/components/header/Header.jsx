import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from '../header/sign-in/SignIn';
import Profile from '../header/profile/Profile';
import Logo from '../../assets/img/logo.svg'
import css from './Header.module.scss'

function Header() {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <header>
            <div className="container">
                <div className={css.header}>
                    <img src={Logo} alt="logo" />
                    <nav className={css.nav}>
                        <ul>
                            <Link to='/'>Главная</Link>
                            <Link to='/'>Тарифы</Link>
                            <Link to='/'>FAQ</Link>
                        </ul>
                    </nav>
                    {isAuth ?
                        <Profile />
                        :
                        <SignIn />
                    }
                </div>
            </div>
        </header>
     );
}

export default Header;