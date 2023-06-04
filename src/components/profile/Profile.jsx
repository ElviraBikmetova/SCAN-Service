import css from './Profile.module.scss'
import Companies from '../companies/Companies';
import Avatar from '../../assets/avatar.png'
import { useDispatch } from 'react-redux';
import { toggleAuth } from '../../store/userSlice';

function Profile() {
    const dispatch = useDispatch()
    const toggleUserAuth = () => dispatch(toggleAuth())

    return (
        <div className={css.profile}>
            <Companies />
            <div className={css.user}>
                <div className={css.info}>
                    <p className={css.name}>Алексей А.</p>
                    <button className={css.btn} onClick={toggleUserAuth}>Выйти</button>
                </div>
                <img className={css.avatar} src={Avatar} alt="avatar" />
            </div>
        </div>
     );
}

export default Profile;