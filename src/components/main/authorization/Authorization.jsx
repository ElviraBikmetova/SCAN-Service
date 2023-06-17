import css from './Authorization.module.scss';
import authorization from '../../../assets/img/authorization.svg'
import lock from '../../../assets/img/lock.svg'
import google from '../../../assets/img/google.svg'
import facebook from '../../../assets/img/facebook.svg'
import yandex from '../../../assets/img/yandex.svg'
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../requests/user';

function Authorization() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(logIn(login, password))
    }

    return (
        <div className={css.authorization}>
            <div>
                <h1 className={css.title}>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
                <img className={css.auth} src={authorization} alt="authorization" />
            </div>
            <div className={css.right}>
                <img className={css.lock} src={lock} alt="lock" />
                <form className={css.form} onSubmit={handleSubmit}>
                    <div className={css.header}>
                        <div className={clsx(css.tab, css.activeTab)}>Войти</div>
                        <div className={css.tab}>Зарегистрироваться</div>
                    </div>
                    <label className={css.label} htmlFor='login'>Логин или номер телефона:</label>
                    <input className={css.input} type='text' id='login' value={login} onChange={e => setLogin(e.target.value)} />
                    <label className={css.label} htmlFor='pass'>Пароль:</label>
                    <input className={css.input} type='password' id='pass' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className={css.submit} type='submit'>Войти</button>
                    <Link className={css.retrieve}>Восстановить пароль</Link>
                    <div>
                        <p>Войти через:</p>
                        <div className={css.logOn}>
                            <button className={css.btn}><img src={google} alt="google" /></button>
                            <button className={css.btn}><img src={facebook} alt="facebook" /></button>
                            <button className={css.btn}><img src={yandex} alt="yandex" /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Authorization;