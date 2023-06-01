import css from './Benefits.module.scss'
import benefits from '../../assets/benefits.svg'
import SimpleSlider from '../slider/SimpleSlider';

function Benefits() {
    return (
        <section className={css.benefits}>
            <h2 className={css.title}>Почему именно мы</h2>
            <div className={css.slider}>
                <SimpleSlider />
            </div>
            <img src={benefits} alt="benefits" />
        </section>
     );
}

export default Benefits;