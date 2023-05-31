import css from './Profile.module.scss'
import Companies from '../companies/Companies';
import Avatar from '../../assets/avatar.png'

function Profile() {
    return (
        <div className={css.profile}>
            <Companies />
            <div className={css.user}>
                <div className={css.info}>
                    <p className={css.name}>Алексей А.</p>
                    <button className={css.btn}>Выйти</button>
                </div>
                <img className={css.avatar} src={Avatar} alt="avatar" />
            </div>
        </div>
     );
}

export default Profile;