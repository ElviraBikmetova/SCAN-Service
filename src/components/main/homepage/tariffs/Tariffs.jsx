import css from './Tariffs.module.scss'
import data from '../../../../json/tariffs.json'
import Tariff from './tariff/Tariff';

function Tariffs() {
    return (
        <section className={css.tariffs}>
            <h2 className={css.title}>наши тарифы</h2>
            <div className={css.wrapper}>
            {data.map(tariff => {
                return (
                    <Tariff key={tariff.id} tariff={tariff} />
                )
            })}
            </div>
        </section>
     );
}

export default Tariffs;