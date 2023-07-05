import css from './Profile.module.scss'
import Companies from '../companies/Companies';
import avatar from '../../../assets/img/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../../store/userSlice';
import loader from '../../../assets/img/loader.gif'

function Profile() {
    const dispatch = useDispatch()
    const logout = () => dispatch(userLogout())
    const isRequest = useSelector(state => state.user.isRequest)

    return (
        <>
            <div className={css.profile}>
                {isRequest ?
                <img className={css.loader} src={loader} alt="loader" />
                : <Companies />
                }
                <div className={css.user}>
                    <div className={css.info}>
                        <p className={css.name}>Алексей А.</p>
                        <button className={css.btn} onClick={logout}>Выйти</button>
                    </div>
                    <img className={css.avatar} src={avatar} alt="avatar" />
                </div>
            </div>
            {/* <div className={css.profileBurger}>
                <div className={css.user}>
                    <div className={css.info}>
                        <p className={css.name}>Алексей А.</p>
                        <button className={css.btn} onClick={logout}>Выйти</button>
                    </div>
                    <img className={css.avatar} src={avatar} alt="avatar" />
                </div>
            </div> */}
        </>

     );
}

export default Profile;