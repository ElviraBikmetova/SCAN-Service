import css from './Profile.module.scss'
import Companies from '../companies/Companies';
import avatar from '../../../assets/img/avatar.png'
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../store/userSlice';

function Profile() {
    const dispatch = useDispatch()
    const logout = () => dispatch(userLogout())

    return (
        <div className={css.profile}>
            <Companies />
            <div className={css.user}>
                <div className={css.info}>
                    <p className={css.name}>Алексей А.</p>
                    <button className={css.btn} onClick={logout}>Выйти</button>
                </div>
                <img className={css.avatar} src={avatar} alt="avatar" />
            </div>
        </div>
     );
}

export default Profile;