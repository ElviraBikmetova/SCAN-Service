import logo from '../../assets/img/logo-white.svg'
import css from './Footer.module.scss'

function Footer() {
    return (
        <footer className={css.footer}>
            <div className="container">
                <div className={css.wrapper}>
                    <img src={logo} alt="logo" />
                    <div className={css.contacts}>
                        <p>г. Москва, Цветной б-р, 40</p>
                        <p>+7 495 771 21 11</p>
                        <p>info@skan.ru</p>
                        <p className={css.copyright}>Copyright. 2022</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;