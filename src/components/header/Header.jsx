import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import css from './Header.module.scss'

function Header() {
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
                </div>
            </div>
        </header>
     );
}

export default Header;