import { Link } from 'react-router-dom';
import css from './SignIn.module.scss'

function SignIn() {
    return (
        <div className={css.auth}>
            <Link to='/' className={css.reg}>Зарегистрироваться</Link>
            <div className={css.line}></div>
            <Link to='/' className={css.btn}>Войти</Link>
        </div>
     );
}

export default SignIn;