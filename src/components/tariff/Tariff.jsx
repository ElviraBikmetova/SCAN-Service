import css from './Tariff.module.scss'
import clsx from 'clsx';

function Tariff(props) {
    const {tariff} = props
    let headerClass = tariff.title
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
                <div className={css.cost}>
                    <div className={css.prices}>
                        <span className={css.price}>{tariff.price}</span>
                        <span className={css.oldPrice}>{tariff.oldPrice}</span>
                    </div>
                    <p>{tariff.installment}</p>
                </div>
                <div className={css.list}>
                    <p>{tariff.include}</p>
                    <ul>
                        <li>{tariff.one}</li>
                        <li>{tariff.two}</li>
                        <li>{tariff.three}</li>
                    </ul>
                </div>
                <button className={css.btn}>{tariff.btn}</button>
            </div>

        </div>
     );
}

export default Tariff;