import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from '../header/sign-in/SignIn';
import Profile from '../header/profile/Profile';
import Logo from '../../assets/img/logo.svg'
import logoWhite from '../../assets/img/logo-white.svg'
import css from './Header.module.scss'
import { slide as Menu } from 'react-burger-menu'
import cross from '../../assets/img/cross.svg'
import Companies from './companies/Companies';

function Header() {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <header>
            <div className="container">
                <div className={css.header}>
                    <div className={css.wrapper}>
                        <img src={Logo} alt="logo" />
                        <nav className={css.nav}>
                            <ul>
                                <Link to='/'>Главная</Link>
                                <Link to='/'>Тарифы</Link>
                                <Link to='/'>FAQ</Link>
                            </ul>
                        </nav>
                        {isAuth ?
                            <div className={css.user}>
                                <div className={css.profile}><Profile /></div>
                                <div className={css.companies}><Companies/></div>
                            </div>
                            :
                            <div className={css.signIn}><SignIn /></div>
                        }
                    </div>
                    <Menu className={css.menuBurger} right customCrossIcon={<img src={cross} />} width={'100%'} >
                        <img className={css.logoWhite} src={logoWhite} alt="logo" />
                        <nav className={css.burgerNav}>
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
                    </Menu>
                </div>
            </div>
        </header>
     );
}

export default Header;