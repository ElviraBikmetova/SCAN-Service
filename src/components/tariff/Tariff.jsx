import css from './Tariff.module.scss'
import { useSelector } from 'react-redux'
// import clsx from 'clsx';

function Tariff(props) {
    const {tariff} = props
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <div className={css.card}>
            <div className={css.header} style={{background: tariff.background, color: tariff.color}}>
                <div className={css.text}>
                    <p className={css.title}>{tariff.title}</p>
                    <p className={css.subtitle}>{tariff.subtitle}</p>
                </div>
                <img src={tariff.img} alt={tariff.img} />
            </div>
            <div className={css.body}>
                {isAuth && <p className={css.badge}>Текущий тариф</p>}
                <div className={css.cost}>
                    <div className={css.prices}>
                        <span className={css.price}>{tariff.price}</span>
                        <span className={css.oldPrice}>{tariff.oldPrice}</span>
                    </div>
                    <p>{tariff.installment}</p>
                </div>
                <div className={css.list}>
                    <p className={css.ulTitle}>В тариф входит:</p>
                    <ul>
                        <li>{tariff.one}</li>
                        <li>{tariff.two}</li>
                        <li>{tariff.three}</li>
                    </ul>
                </div>
                {isAuth ? <button className={css.btnAuth}>Перейти в личный кабинет</button>
                 : <button className={css.btn}>Подробнее</button>}
            </div>

        </div>
     );
}

export default Tariff;