import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../assets/logo.svg'
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
                        <div>авторизованный</div>
                        :
                        <div>не авторизованный</div>
                    }
                </div>
            </div>
        </header>
     );
}

export default Header;